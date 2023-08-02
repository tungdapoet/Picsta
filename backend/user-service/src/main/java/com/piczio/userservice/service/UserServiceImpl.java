package com.piczio.userservice.service;

import com.piczio.userservice.dto.UserRequestDto;
import com.piczio.userservice.dto.UserResponseDto;
import com.piczio.userservice.mapper.UserMapper;
import com.piczio.userservice.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserResponseDto getUser(UserRequestDto userRequestDto) {
        var user = userRepository.findByEmail(userRequestDto.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found with email: " + userRequestDto.getEmail()));

        return UserResponseDto
                .builder()
                .email(user.getEmail())
                .name(user.getName())
                .build();
    }

    @Override
    public List<UserResponseDto> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserMapper::mapToUserResponseDto)
                .collect(Collectors.toList());
    }
}
