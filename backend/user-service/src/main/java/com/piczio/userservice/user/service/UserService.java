package com.piczio.userservice.user.service;

import com.piczio.userservice.user.dto.UserRequestDto;
import com.piczio.userservice.user.dto.UserResponseDto;

import java.util.List;

public interface UserService {

    Long getUserId(UserRequestDto userRequestDto);
    UserResponseDto getUser(UserRequestDto userRequestDto);

    List<UserResponseDto> getAllUsers();
}
