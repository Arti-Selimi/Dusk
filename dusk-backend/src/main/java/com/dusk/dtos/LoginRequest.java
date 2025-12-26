package com.dusk.dtos;

import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
    @NotBlank(message = "Please enter a valid email") String email,
    @NotBlank(message = "Please enter a password") String password) {
}
