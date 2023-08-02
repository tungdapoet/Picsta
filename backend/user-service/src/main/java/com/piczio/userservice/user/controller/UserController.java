package com.piczio.userservice.user.controller;

import com.piczio.userservice.user.dto.UserRequestDto;
import com.piczio.userservice.user.dto.UserResponseDto;
import com.piczio.userservice.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/management")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class UserController {
    private final UserService userService;

    @GetMapping("detail")
    @PreAuthorize("hasAuthority('admin:read')")
    public UserResponseDto getUser(@RequestBody UserRequestDto request) {
        return userService.getUser(request);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public List<UserResponseDto> getAllUsers() {
        return userService.getAllUsers();
    }
}