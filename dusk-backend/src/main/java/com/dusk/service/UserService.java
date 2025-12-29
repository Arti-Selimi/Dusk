package com.dusk.service;

import com.dusk.model.User;
import com.dusk.repository.UserRepository;
import com.dusk.dtos.UserInput;
import com.dusk.dtos.UserResponse;
import com.dusk.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
  private final UserRepository userRepository;
  private final UserMapper userMapper;

  public UserResponse getCurrentUserResponse() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    if (authentication == null || !authentication.isAuthenticated()
        || authentication.getPrincipal().equals("anonymousUser")) {
      throw new RuntimeException("User not found");
    }

    String email = authentication.getName();

    User user = userRepository.findByEmail(email)
        .orElseThrow(() -> new RuntimeException("User not found"));

    return new UserResponse(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName(), user.getAddress(),
        user.getBillingAddress(), user.getPhoneNumber(), user.getBirthDate());
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public User getUserById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  @Transactional
  public UserResponse updateUser(UserInput userDetails) {
    User user = userRepository.findById(userDetails.id())
        .orElseThrow(() -> new RuntimeException("User not found"));

    userMapper.updateUserFromInput(userDetails, user);

    return userMapper.toResponse(user);
  }
}
