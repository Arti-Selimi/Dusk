package com.dusk.dtos;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
    @NotBlank(message = "please enter an email") String email,

    @NotBlank(message = "please enter a password") String password,

    @NotBlank(message = "enter your name") String firstName,

    @NotBlank(message = "enter your last name") String lastName,

    @NotBlank(message = "enter your number") String phoneNumber,

    @NotBlank(message = "enter an address") String address,

    @NotBlank(message = "enter a billing address") String billingAddress) {
}
