package com.dusk.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dusk.dtos.BankAccountInput;
import com.dusk.dtos.BankAccountResponse;
import com.dusk.mapper.BankAccountMapper;
import com.dusk.model.BankAccount;
import com.dusk.model.Card;
import com.dusk.model.User;
import com.dusk.repository.BankAccountRepository;
import com.dusk.repository.CardRepository;
import com.dusk.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BankAccountService {
  private final BankAccountRepository bankAccountRepository;
  private final UserRepository userRepository;
  private final CardRepository cardRepository;
  private final BankAccountMapper bankAccountMapper;

  public BankAccount createBankAccount(BankAccountInput accountDetails) {
    User owner = userRepository.findById(accountDetails.ownerId())
        .orElseThrow(() -> new RuntimeException("user not found"));
    Card card = null;
    if (accountDetails.cardId() != null)
      card = cardRepository.findById(accountDetails.cardId()).orElseThrow(() -> new RuntimeException("card not found"));

    BankAccount bankAccount = BankAccount.builder()
        .name(accountDetails.name())
        .owner(owner)
        .card(card)
        .type(accountDetails.type())
        .currency(accountDetails.currency())
        .build();

    return bankAccountRepository.save(bankAccount);
  }

  public BankAccountResponse updateBankAccount(BankAccountInput accountDetails) {
    BankAccount account = bankAccountRepository.findById(accountDetails.accountId())
        .orElseThrow(() -> new RuntimeException());

    bankAccountMapper.updateBankAccountFromInput(accountDetails, account);

    return bankAccountMapper.toResponse(account);
  }

  public BankAccount getBankAccount(Long id) {
    return bankAccountRepository.findById(id).orElse(null);
  }

  public List<BankAccount> getAllBankAccounts() {
    return bankAccountRepository.findAll();
  }

  public BankAccount getBankAccountByOwnerId(Long ownerId) {
    return bankAccountRepository.findBankAccountByOwner_Id(ownerId).orElse(null);
  }

  public BankAccount getBankAccountByCardId(Long cardId) {
    return bankAccountRepository.findBankAccountByCard_Id(cardId).orElse(null);
  }
}
