package com.dusk.dtos;

import org.jetbrains.annotations.NotNull;

import com.dusk.enums.AccountStatus;
import com.dusk.enums.AccountType;

import jakarta.validation.constraints.NotBlank;

public record BankAccountInput(
    Long accountId,
    @NotBlank(message = "please enter a name") String name,
    @NotBlank(message = "please give a valid user id") Long ownerId,
    @NotBlank(message = "please select a valid type") AccountType type,
    @NotBlank(message = "please select a valid status") AccountStatus status,
    Long cardId,
    @NotNull String currency) {
}
