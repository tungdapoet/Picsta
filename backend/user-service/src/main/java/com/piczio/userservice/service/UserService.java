package com.piczio.userservice.service;

import com.piczio.userservice.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User createUser(User user);

    User updateUser(User user);

    void deleteUser(Long userId);

    Optional<User> getUserById(Long userId);

    List<User> getAllUsers();
}
