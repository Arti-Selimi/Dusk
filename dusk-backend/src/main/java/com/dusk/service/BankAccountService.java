package com.dusk.service;

import java.util.List;
import java.util.stream.Collectors;

import com.dusk.mapper.MembershipsMapper;
import com.dusk.model.*;
import com.dusk.repository.*;
import org.springframework.stereotype.Service;

import com.dusk.dtos.BankAccountInput;
import com.dusk.dtos.BankAccountResponse;
import com.dusk.dtos.TransactionResponse;
import com.dusk.dtos.UpdateBalanceInput;
import com.dusk.mapper.BankAccountMapper;
import com.dusk.mapper.TransactionMapper;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BankAccountService {
  private final BankAccountRepository bankAccountRepository;
  private final UserRepository userRepository;
  private final CardRepository cardRepository;
  private final TransactionRepository transactionRepository;
  private final BankAccountMapper bankAccountMapper;
  private final TransactionMapper transactionMapper;
  private final MembershipsRepository membershipsRepository;

  public BankAccount createBankAccount(BankAccountInput accountDetails) {
    User owner = userRepository.findById(accountDetails.ownerId())
        .orElseThrow(() -> new RuntimeException("user not found"));
    Card card = null;
    if (accountDetails.cardId() != null)
      card = cardRepository.findById(accountDetails.cardId()).orElseThrow(() -> new RuntimeException("card not found"));

    List<Memberships> memberships = membershipsRepository.findByUser_Id(owner.getId());

    for (Memberships membership : memberships) {
      if(membership.isActive()) {
        if(bankAccountRepository.countByOwner_Id(owner.getId()) >= membership.getMaxAccounts()) {
          if (membership.getMembershipType().equals("Primary")) {
            throw new RuntimeException("Maximum number of bank accounts reached for Primary membership");
          }
          if (membership.getMembershipType().equals("Basic")) {
            throw new RuntimeException("Maximum number of bank accounts reached for Basic membership");
          }
        }
      }
    }

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

  @Transactional
  public TransactionResponse updateBalance(UpdateBalanceInput input) {
    BankAccount account = bankAccountRepository.findById(input.accountId())
        .orElseThrow(() -> new RuntimeException("Bank account not found"));

    double balanceBefore = account.getBalance();
    double amount = input.amount();
    double balanceAfter;

    if ("DEBIT".equalsIgnoreCase(input.transactionType())) {
      if (balanceBefore < amount) {
        throw new RuntimeException("Insufficient balance");
      }
      balanceAfter = balanceBefore - amount;
    } else if ("CREDIT".equalsIgnoreCase(input.transactionType())) {
      balanceAfter = balanceBefore + amount;
    } else {
      throw new RuntimeException("Invalid transaction type. Must be CREDIT or DEBIT");
    }

    account.setBalance(balanceAfter);
    bankAccountRepository.save(account);

    Transaction transaction = Transaction.builder()
        .account(account)
        .user(account.getOwner())
        .amount(amount)
        .balanceBefore(balanceBefore)
        .balanceAfter(balanceAfter)
        .transactionType(input.transactionType().toUpperCase())
        .description(input.description())
        .build();

    Transaction savedTransaction = transactionRepository.save(transaction);
    return transactionMapper.toResponse(savedTransaction);
  }

  public List<TransactionResponse> getTransactionsByUserId(Long userId) {
    List<Transaction> transactions = transactionRepository.findByUser_Id(userId);
    return transactions.stream()
        .map(transactionMapper::toResponse)
        .collect(Collectors.toList());
  }

  public List<TransactionResponse> getTransactionsByAccountId(Long accountId) {
    List<Transaction> transactions = transactionRepository.findByAccount_Id(accountId);
    return transactions.stream()
        .map(transactionMapper::toResponse)
        .collect(Collectors.toList());
  }
}
