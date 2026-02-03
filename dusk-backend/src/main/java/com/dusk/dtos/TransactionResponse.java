package com.dusk.dtos;

public record TransactionResponse(
    Long id,
    Long accountId,
    Long userId,
    double amount,
    double balanceBefore,
    double balanceAfter,
    String transactionType,
    String description,
    String createdAt) {
}
