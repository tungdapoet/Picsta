package com.piczio.userservice.auth.dto;

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
public class AuthenticationRequestDto {

    @NotEmpty(message = "Email must not be empty!")
    @Email(message = "Email is not valid!")
    private String email;

    @NotEmpty(message = "Password must not be empty!")
    private String password;
}