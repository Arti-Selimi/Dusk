package com.dusk.dtos;

import java.time.LocalDate;

import com.dusk.enums.CardBrand;
import com.dusk.model.BankAccount;
import com.dusk.model.User;

public record CardResponse(
    Long id,
    User owner,
    BankAccount account,
    String maskedCardNumber,
    String ownerName,
    LocalDate expiryDate,
    CardBrand brand,
    boolean isActive) {
}
