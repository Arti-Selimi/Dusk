package com.dusk.dtos;

import java.time.LocalDate;

import com.dusk.enums.CardBrand;

public record CardResponse(
    Long cardId,
    Long userId,
    Long accountId,
    String maskedCardNumber,
    String owner,
    LocalDate expiryDate,
    CardBrand brand,
    boolean isActive) {
}
