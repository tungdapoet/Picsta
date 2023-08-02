package com.piczio.userservice.user.mapper;

import com.piczio.userservice.user.dto.UserResponseDto;
import com.piczio.userservice.user.entity.User;

public class UserMapper {
    public static UserResponseDto mapToUserResponseDto(User user) {
        return UserResponseDto
                .builder()
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .build();
    }

}
