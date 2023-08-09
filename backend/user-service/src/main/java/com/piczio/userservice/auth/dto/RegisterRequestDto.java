package com.piczio.userservice.auth.dto;

import com.piczio.userservice.user.entity.Role;
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
public class RegisterRequestDto {

    @NotEmpty(message = "Firstname must not be empty!")
    private String firstName;

    @NotEmpty(message = "Lastname must not be empty!")
    private String lastName;

    @NotEmpty(message = "Email must not be empty!")
    @Email(message = "Email is not valid!")
    private String email;

    @NotEmpty(message = "Password must not be empty!")
    private String password;

    @Builder.Default
    private Role role = Role.USER;
}
