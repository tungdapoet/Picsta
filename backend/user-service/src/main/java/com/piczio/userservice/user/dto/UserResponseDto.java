package com.piczio.userservice.user.dto;

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
        description = "UserDTO for response"
)
public class UserResponseDto {

    @Schema(
            name = "User email",
            type = "Email",
            description = "User email",
            example = "abc@gmail.com"
    )
    private String email;

    @Schema(
            name = "First name",
            type = "String",
            description = "User firstname",
            example = "Tung"
    )
    private String firstName;

    @Schema(
            name = "Last name",
            type = "String",
            description = "User lastname",
            example = "Duong"
    )
    private String lastName;
}
