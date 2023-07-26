package com.example.user.controller;

import com.example.user.dto.GetAllUserResponseDto;
import com.example.user.dto.RegisterRequestDto;
import com.example.user.dto.RegisterResponseDto;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @PostMapping()
  public ResponseEntity<RegisterResponseDto> register(@RequestBody RegisterRequestDto request) {
    return userService.register(request);
  }

  @GetMapping
  public ResponseEntity<GetAllUserResponseDto> getAllUser() {
    return userService.getAllUser();
  }
}
