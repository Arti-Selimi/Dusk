package com.dusk.dtos;

import jakarta.validation.constraints.NotNull;

public record SettingsInput(
    @NotNull Long ownerId) {
}
