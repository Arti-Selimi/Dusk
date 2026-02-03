package com.dusk.dtos;

public record UpdateBalanceInput(
    Long accountId,
    double amount,
    String transactionType,
    String description) {
}
