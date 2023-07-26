package com.example.user.dto;

import com.example.user.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetAllUserResponseDto {
  private List<GetUserResponseDto> userList;

  public static GetAllUserResponseDto fromUserList(List<User> users) {
    return GetAllUserResponseDto.builder()
        .userList(users.stream().map(GetUserResponseDto::fromUser).collect(Collectors.toList()))
        .build();
  }
}
