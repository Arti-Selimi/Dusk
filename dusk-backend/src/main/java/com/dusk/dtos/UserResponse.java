package com.dusk.dtos;

public record UserResponse(
    Long id,
    String email,
    String firstName,
    String lastName) {
}
