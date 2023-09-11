package com.piczio.userservice.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("api/v1/oauth2")
public class OAuth2Controller {

    @GetMapping("/authorize")
    public ResponseEntity<Void> redirectToGoogleOAuth() {
        String authorizationUri = "https://accounts.google.com/o/oauth2/v2/auth?" +
                "client_id=" + "1063640680585-4m7673brd1p2fsjfuep7vatg7cb1etdo.apps.googleusercontent.com" +
                "&redirect_uri=" + "http://localhost:30080/api/v1/oauth2/code/google" +
                "&response_type=code" +
                "&scope=openid%20profile%20email";

        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(authorizationUri)).build();
    }

    @GetMapping("/callback/{registrationId}")
    public ResponseEntity<String> handleOAuth2Callback(@PathVariable String registrationId, @RequestParam String code) {
        return ResponseEntity.ok("Authentication successful!");
    }
}
