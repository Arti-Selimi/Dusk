package com.dusk.dtos;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;

public record UserInput(
    @NotBlank(message = "enter an id") Long id,

    String email,

    String password,

    String firstName,

    String lastName,

    String phoneNumber,

    String address,

    String billingAddress,

    LocalDateTime birthDate) {
}
