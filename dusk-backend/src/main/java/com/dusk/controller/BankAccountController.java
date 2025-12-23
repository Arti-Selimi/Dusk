package com.dusk.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.dusk.service.BankAccountService;
import com.dusk.dtos.BankAccountInput;
import com.dusk.model.BankAccount;

@Controller
public class BankAccountController {
  private final BankAccountService bankAccountService;

  public BankAccountController(BankAccountService bankAccountService) {
    this.bankAccountService = bankAccountService;
  }

  @QueryMapping(name = "bankAccounts")
  public List<BankAccount> allAccounts() {
    return bankAccountService.getAllBankAccounts();
  }

  @QueryMapping(name = "bankAccount")
  public BankAccount getBankAccount(
      @Argument Long accountId,
      @Argument Long cardId,
      @Argument Long ownerId) {
    if (accountId != null)
      return bankAccountService.getBankAccount(accountId);
    if (cardId != null)
      return bankAccountService.getBankAccountByCardId(cardId);
    if (ownerId != null)
      return bankAccountService.getBankAccountByOwnerId(ownerId);
    return null;
  }

  @MutationMapping
  public BankAccount createBankAccount(@Argument BankAccountInput accountDetails) {
    return bankAccountService.createBankAccount(accountDetails);
  }
}
