package com.example.user.dto;

import com.example.user.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterResponseDto {

  private String username;

  private String password;

  public static RegisterResponseDto fromUser(User user) {
    return RegisterResponseDto
        .builder()
        .username(user.getUsername())
        .password(user.getPassword())
        .build();
  }

}
