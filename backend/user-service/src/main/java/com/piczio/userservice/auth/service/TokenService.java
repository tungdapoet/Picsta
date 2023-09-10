package com.piczio.userservice.auth.service;

import com.piczio.userservice.user.entity.User;

public interface TokenService {

    void saveUserToken(User user, String jwtToken);

    void revokeAllUserTokens(User user);

}
