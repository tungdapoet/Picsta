package com.piczio.userservice.auth.service;

import com.piczio.userservice.auth.dto.AuthenticationRequestDto;
import com.piczio.userservice.auth.dto.RegisterRequestDto;
import com.piczio.userservice.auth.dto.RegisterResponseDto;
import com.piczio.userservice.auth.dto.AuthenticationResponseDto;
import com.piczio.userservice.config.JwtService;
import com.piczio.userservice.entity.User;
import com.piczio.userservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    @Override
    public RegisterResponseDto register(RegisterRequestDto registerRequestDto) {
        var user =
                User
                        .builder()
                        .email(registerRequestDto.getEmail())
                        .password(passwordEncoder.encode(registerRequestDto.getPassword()))
                        .name(registerRequestDto.getName())
                        .build();


        userRepository.save(user);

        String jwtToken = jwtService.generateToken(user);

        return RegisterResponseDto
                .builder()
                .token(jwtToken)
                .build();
    }


    @Override
    public AuthenticationResponseDto authenticate(AuthenticationRequestDto req) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        req.getEmail(),
                        req.getPassword()
                )
        );

        var user = userRepository
                .findByEmail(req.getEmail()).orElseThrow();

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponseDto
                .builder()
                .token(jwtToken)
                .build();
    }
}