
package com.dusk.service;

import com.dusk.model.Settings;
import com.dusk.model.User;
import com.dusk.repository.UserRepository;
import com.dusk.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dusk.dtos.AuthPayload;
import com.dusk.dtos.UserResponse;
import com.dusk.dtos.LoginRequest;
import com.dusk.dtos.RegisterRequest;

@Service
@RequiredArgsConstructor
public class AuthService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;

  public AuthPayload register(RegisterRequest registerRequest) {
    Settings settings = Settings.builder().build();
    User user = User.builder()
        .email(registerRequest.email())
        .password(passwordEncoder.encode(registerRequest.password()))
        .firstName(registerRequest.firstName())
        .lastName(registerRequest.lastName())
        .phoneNumber(registerRequest.phoneNumber())
        .address(registerRequest.address())
        .billingAddress(registerRequest.billingAddress())
        .settings(settings)
        .enabled(true)
        .build();
    User savedUser = userRepository.save(user);
    settings.setOwner(savedUser);

    String token = jwtService.generateToken(savedUser.getEmail());

    UserResponse userResponse = new UserResponse(savedUser.getId(), savedUser.getEmail(), savedUser.getFirstName(),
        savedUser.getLastName(), savedUser.getPhoneNumber(), savedUser.getAddress(), savedUser.getBillingAddress(),
        savedUser.getBirthDate());
    return new AuthPayload(token, userResponse);
  }

  public AuthPayload login(LoginRequest loginRequest) {
    User user = userRepository.findByEmail(loginRequest.email())
        .orElseThrow(() -> new RuntimeException("User not found"));

    if (!passwordEncoder.matches(loginRequest.password(), user.getPassword())) {
      throw new RuntimeException("Invalid password");
    }

    String token = jwtService.generateToken(user.getEmail());

    UserResponse userResponse = new UserResponse(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName(),
        user.getAddress(),
        user.getBillingAddress(), user.getPhoneNumber(), user.getBirthDate());

    return new AuthPayload(token, userResponse);
  }
}
