package com.piczio.userservice.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(
        description = "DTO for authentication request"
)
public class AuthenticationRequestDto {

    @Schema(
            name = "User email",
            type = "Email",
            description = "User email",
            example = "abc@gmail.com"
    )
    @NotEmpty(message = "Email must not be empty!")
    @Email(message = "Email is not valid!")
    private String email;

    @Schema(
            name = "User password",
            type = "String",
            description = "User password",
            example = "abc123456"
    )
    @NotEmpty(message = "Password must not be empty!")
    private String password;
}