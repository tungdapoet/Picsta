package com.piczio.userservice.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(
        description = "DTO for authentication response"
)
public class AuthenticationResponseDto {

    @Schema(
            name = "access_token",
            type = "Token",
            description = "User's access token"
    )
    @JsonProperty("access_token")
    private String accessToken;

    @Schema(
            name = "refresh_token",
            type = "Token",
            description = "User's refresh token"
    )
    @JsonProperty("refresh_token")
    private String refreshToken;
}
