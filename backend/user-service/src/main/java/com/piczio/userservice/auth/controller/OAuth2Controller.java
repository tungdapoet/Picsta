package com.piczio.userservice.auth.controller;

import com.piczio.userservice.auth.dto.UserPrincipalWithTokenDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/oauth2")
public class OAuth2Controller {

    private final OAuth2AuthorizedClientService authorizedClientService;

    @GetMapping("/authorize")
    public ResponseEntity<Void> redirectToGoogleOAuth() {
        String authorizationUri = "https://accounts.google.com/o/oauth2/v2/auth?" +
                "client_id=" + "584972720399-kdafld4ui47fvhbb5u3bq0mn2h8g09md.apps.googleusercontent.com" +
                "&redirect_uri=" + "http://localhost:30080/api/v1/oauth2/callback/google" +
                "&response_type=code" +
                "&scope=openid%20profile%20email";

        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(authorizationUri)).build();
    }


    @GetMapping("/callback/{registrationId}")
    public ResponseEntity<?> handleOAuth2Callback(@AuthenticationPrincipal OAuth2User principal, OAuth2AuthenticationToken authentication) {
        if (authentication == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No valid OAuth2 authentication found.");
        }
        OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(
                authentication.getAuthorizedClientRegistrationId(),
                authentication.getName());

        String accessToken = authorizedClient.getAccessToken().getTokenValue();

        return ResponseEntity.ok(new UserPrincipalWithTokenDto(accessToken, principal));
    }
}
