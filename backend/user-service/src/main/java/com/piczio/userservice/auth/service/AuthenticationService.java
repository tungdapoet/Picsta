package com.piczio.userservice.auth.service;

import com.piczio.userservice.auth.dto.AuthenticationRequestDto;
import com.piczio.userservice.auth.dto.AuthenticationResponseDto;
import com.piczio.userservice.auth.dto.RegisterRequestDto;
import com.piczio.userservice.user.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationService {
    AuthenticationResponseDto register(RegisterRequestDto registerRequestDto);

    AuthenticationResponseDto authenticate(AuthenticationRequestDto req);

    void saveUserToken(User user, String jwtToken);

    void revokeAllUserTokens(User user);

    void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException;
}
