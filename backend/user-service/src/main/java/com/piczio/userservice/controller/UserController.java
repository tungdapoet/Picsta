package com.piczio.userservice.controller;

import com.piczio.userservice.dto.UserRequestDto;
import com.piczio.userservice.dto.UserResponseDto;
import com.piczio.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/management")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("detail")
    public UserResponseDto getUser(@RequestBody UserRequestDto request) {
        return userService.getUser(request);
    }

    @GetMapping
    public List<UserResponseDto> getAllUsers() {
        return userService.getAllUsers();
    }
}