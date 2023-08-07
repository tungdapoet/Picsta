package com.piczio.userservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@AllArgsConstructor
@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class AuthenticationFailedException extends RuntimeException {
    private String message;
}
