package com.piczio.userservice.auth.service;

import com.piczio.userservice.auth.dto.AuthenticationRequestDto;
import com.piczio.userservice.auth.dto.AuthenticationResponseDto;
import com.piczio.userservice.auth.dto.RegisterRequestDto;
import com.piczio.userservice.auth.dto.RegisterResponseDto;

public interface AuthenticationService {
    RegisterResponseDto register(RegisterRequestDto registerRequestDto);

    AuthenticationResponseDto authenticate(AuthenticationRequestDto req);
}
