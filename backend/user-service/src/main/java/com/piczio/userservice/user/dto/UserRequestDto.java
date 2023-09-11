package com.piczio.userservice.user.dto;

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
