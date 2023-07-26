package com.example.user.service;


import com.example.user.dto.GetAllUserResponseDto;
import com.example.user.dto.RegisterRequestDto;
import com.example.user.dto.RegisterResponseDto;
import com.example.user.model.User;
import com.example.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  public ResponseEntity<GetAllUserResponseDto> getAllUser() {
    var users = userRepository.findAll();

    return ResponseEntity.ok(GetAllUserResponseDto.fromUserList(users));
  }

  public ResponseEntity<RegisterResponseDto> register(RegisterRequestDto request) {
    User user = User
        .builder()
        .username(request.getUsername())
        .password(request.getPassword())
        .build();
    userRepository.save(user);

    return ResponseEntity.ok(RegisterResponseDto.fromUser(user));
  }
}
