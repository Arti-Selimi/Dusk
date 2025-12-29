package com.dusk.controller;

import com.dusk.dtos.UserInput;
import com.dusk.dtos.UserResponse;
import com.dusk.model.User;
import com.dusk.service.UserService;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @QueryMapping(name = "users")
  public List<User> allUsers() {
    return userService.getAllUsers();
  }

  @QueryMapping(name = "user")
  public User getUserById(@Argument Long id) {
    return userService.getUserById(id);
  }

  @MutationMapping
  public UserResponse updateUser(@Argument UserInput userDetails) {
    return userService.updateUser(userDetails);
  }
}
