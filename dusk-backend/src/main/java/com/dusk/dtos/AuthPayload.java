package com.dusk.dtos;

public record AuthPayload(
    String token,
    UserResponse user) {
}
