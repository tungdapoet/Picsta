package com.piczio.userservice.auth.controller;

import com.piczio.userservice.auth.dto.AuthenticationRequestDto;
import com.piczio.userservice.auth.dto.AuthenticationResponseDto;
import com.piczio.userservice.auth.dto.RegisterRequestDto;
import com.piczio.userservice.auth.service.AuthenticationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@Tag(
        name = "Authentication endpoints",
        description = "CRUD REST APIs - Authentication"
)
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Operation(
            summary = "Register"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDto> register(@RequestBody @Valid RegisterRequestDto request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @Operation(
            summary = "Authentication (Login)"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponseDto> authenticate(@RequestBody @Valid AuthenticationRequestDto request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @Operation(
            summary = "Refresh Token",
            description = "Use refresh token to get a new access token"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        authenticationService.refreshToken(request, response);
    }

    @GetMapping("/oauth2/user")
    public ResponseEntity<?> getOauth2User(@AuthenticationPrincipal OAuth2User user) {
        if (user != null) {
            return ResponseEntity.ok(user.getAttributes());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not authenticated with OAuth2");
    }
}