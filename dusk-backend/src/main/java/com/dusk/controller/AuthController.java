package com.dusk.controller;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.dusk.dtos.AuthPayload;
import com.dusk.dtos.LoginRequest;
import com.dusk.dtos.RegisterRequest;
import com.dusk.dtos.UserResponse;
import com.dusk.service.AuthService;
import com.dusk.service.UserService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class AuthController {
  private final AuthService authService;
  private final UserService userService;

  @QueryMapping
  public UserResponse me() {
    return userService.getCurrentUserResponse();
  }

  @MutationMapping(name = "login")
  public AuthPayload login(@Argument LoginRequest loginRequest) {
    return authService.login(loginRequest);
  }

  @MutationMapping(name = "register")
  public AuthPayload register(@Argument RegisterRequest registerRequest) {
    return authService.register(registerRequest);
  }
}
