package com.dusk.dtos;

import jakarta.validation.constraints.NotBlank;

public record MembershipInput(
    @NotBlank(message = "Id is needed") Long id,
    Long userId,
    String name,
    String type,
    boolean active) {
}
