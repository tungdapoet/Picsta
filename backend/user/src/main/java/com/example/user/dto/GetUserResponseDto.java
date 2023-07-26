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
public class GetUserResponseDto {
  private String username;

  private String password;

  public static GetUserResponseDto fromUser(User user) {
    return GetUserResponseDto.builder()
        .username(user.getUsername())
        .password(user.getPassword())
        .build();
  }
}
