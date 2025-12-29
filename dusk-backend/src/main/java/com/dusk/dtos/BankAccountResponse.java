package com.dusk.dtos;

import com.dusk.enums.AccountStatus;
import com.dusk.enums.AccountType;
import com.dusk.model.Card;
import com.dusk.model.User;

public record BankAccountResponse(
    Long id,
    User owner,
    Card card,
    AccountType type,
    AccountStatus status,
    String currency,
    String accountNumber,
    String name,
    double balance) {
}
