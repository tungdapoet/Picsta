package com.piczio.userservice.user.controller;

import com.piczio.userservice.user.dto.UserRequestDto;
import com.piczio.userservice.user.dto.UserResponseDto;
import com.piczio.userservice.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(
        name = "User Management endpoints",
        description = "CRUD REST APIs - User Management (Authority required)"
)
@RestController
@RequestMapping("api/v1/management")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class UserController {
    private final UserService userService;

    @Operation(
            summary = "Get an User",
            description = "Get an user by email (ADMIN role required)"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @PostMapping("detail")
    @PreAuthorize("hasAuthority('admin:read')")
    public UserResponseDto getUser(@RequestBody @Valid UserRequestDto request) {
        return userService.getUser(request);
    }

    @Operation(
            summary = "Get all Users",
            description = "Get all users (ADMIN role required)"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public List<UserResponseDto> getAllUsers() {
        return userService.getAllUsers();
    }
}