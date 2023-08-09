package com.piczio.userservice.user.dto;

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
        description = "UserDTO for request"
)
public class UserRequestDto {

    @Schema(
            name = "User email",
            type = "Email",
            description = "User email",
            example = "abc@gmail.com"
    )
    @NotEmpty(message = "Email must not be empty!")
    @Email(message = "Email is not valid!")
    private String email;
}
