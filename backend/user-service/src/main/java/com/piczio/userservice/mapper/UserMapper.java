package com.piczio.userservice.mapper;

import com.piczio.userservice.dto.UserResponseDto;
import com.piczio.userservice.entity.User;

public class UserMapper {
    public static UserResponseDto mapToUserResponseDto(User user) {
        return UserResponseDto
                .builder()
                .email(user.getEmail())
                .name(user.getName())
                .build();
    }

}
