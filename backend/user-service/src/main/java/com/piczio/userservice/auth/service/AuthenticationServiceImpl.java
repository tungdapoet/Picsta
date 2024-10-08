package com.piczio.userservice.auth.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.piczio.userservice.auth.dto.AuthenticationRequestDto;
import com.piczio.userservice.auth.dto.RegisterRequestDto;
import com.piczio.userservice.auth.dto.AuthenticationResponseDto;
import com.piczio.userservice.config.JwtService;
import com.piczio.userservice.exception.AuthenticationFailedException;
import com.piczio.userservice.exception.EmailAlreadyExistsException;
import com.piczio.userservice.exception.ResourceNotFoundException;
import com.piczio.userservice.user.entity.User;
import com.piczio.userservice.user.repository.UserRepository;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;


@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;

    private final TokenService tokenService;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;


    private User getUserFromRepository(String email) {
        return userRepository
                .findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User", "email", email));
    }

    @Override
    public AuthenticationResponseDto register(RegisterRequestDto registerRequestDto) {
        try {
            User user = User.builder()
                    .firstName(registerRequestDto.getFirstName())
                    .lastName(registerRequestDto.getLastName())
                    .email(registerRequestDto.getEmail())
                    .password(passwordEncoder.encode(registerRequestDto.getPassword()))
                    .role(registerRequestDto.getRole())
                    .build();

            User savedUser = userRepository.save(user);
            String jwtToken = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);

            tokenService.saveUserToken(savedUser, jwtToken);

            return AuthenticationResponseDto.builder()
                    .accessToken(jwtToken)
                    .refreshToken(refreshToken)
                    .build();
        } catch (DataIntegrityViolationException e) {
            throw new EmailAlreadyExistsException("Email is already exists");
        }
    }


    @Override
    public AuthenticationResponseDto authenticate(AuthenticationRequestDto authenticationRequestDto) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequestDto.getEmail(),
                            authenticationRequestDto.getPassword()
                    )
            );

            User user = getUserFromRepository(authenticationRequestDto.getEmail());

            String jwtToken = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);

            tokenService.revokeAllUserTokens(user);
            tokenService.saveUserToken(user, jwtToken);

            return AuthenticationResponseDto.builder()
                    .accessToken(jwtToken)
                    .refreshToken(refreshToken)
                    .build();
        } catch (BadCredentialsException e) {
            throw new AuthenticationFailedException("Authentication failed!");
        }
    }

    @Override
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;

        if (authHeader == null ||!authHeader.startsWith("Bearer ")) return;

        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);

        if (userEmail != null) {
            User user = getUserFromRepository(userEmail);

            if (jwtService.isTokenValid(refreshToken, user)) {
                String accessToken = jwtService.generateToken(user);

                tokenService.revokeAllUserTokens(user);
                tokenService.saveUserToken(user, accessToken);

                AuthenticationResponseDto authResponse = AuthenticationResponseDto.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();

                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}