package com.piczio.userservice.user.controller;

import com.piczio.userservice.config.JwtService;
import com.piczio.userservice.kafka.service.UserServiceProducer;
import com.piczio.userservice.user.dto.UserRequestDto;
import com.piczio.userservice.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class EventController {

    private final UserService userService;

    private final JwtService jwtService;

    private final UserServiceProducer userServiceProducer;

    private Long getUserIdFromToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        String jwt = authHeader.substring(7);
        String email = jwtService.extractUsername(jwt);

        UserRequestDto userRequestDto = UserRequestDto.builder()
                .email(email)
                .build();

        return userService.getUserId(userRequestDto);
    }
}
