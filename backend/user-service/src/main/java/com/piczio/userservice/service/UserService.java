package com.piczio.userservice.service;

import com.piczio.userservice.dto.UserRequestDto;
import com.piczio.userservice.dto.UserResponseDto;

import java.util.List;

public interface UserService {
    UserResponseDto getUser(UserRequestDto userRequestDto);

    List<UserResponseDto> getAllUsers();
}
