package com.piczio.userservice.auth.dto;

import com.piczio.userservice.user.entity.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(
        description = "DTO for register request"
)
public class RegisterRequestDto {

    @Schema(
            name = "First name",
            type = "String",
            description = "User firstname",
            example = "Tung"
    )
    @NotEmpty(message = "Firstname must not be empty!")
    private String firstName;

    @Schema(
            name = "Last name",
            type = "String",
            description = "User lastname",
            example = "Duong"
    )
    @NotEmpty(message = "Lastname must not be empty!")
    private String lastName;

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

    @Schema(
            name = "User Role",
            type = "String",
            description = "User role",
            example = "USER"
    )
    @Builder.Default
    private Role role = Role.USER;
}
