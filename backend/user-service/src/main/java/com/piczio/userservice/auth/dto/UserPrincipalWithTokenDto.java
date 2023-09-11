package com.piczio.userservice.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.oauth2.core.user.OAuth2User;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserPrincipalWithTokenDto {
    private String accessToken;

    private OAuth2User user;
}
