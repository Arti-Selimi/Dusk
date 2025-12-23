package com.dusk.service;

import com.dusk.model.Card;
import com.dusk.model.User;
import com.dusk.model.BankAccount;
import com.dusk.repository.CardRepository;
import com.dusk.repository.UserRepository;
import com.dusk.repository.BankAccountRepository;

import lombok.RequiredArgsConstructor;

import com.dusk.dtos.CardInput;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CardService {
  private final CardRepository cardRepository;
  private final UserRepository userRepository;
  private final BankAccountRepository accountRepository;

  public Card createCard(CardInput cardDetails) {
    User user = userRepository.findById(cardDetails.ownerId())
        .orElseThrow(() -> new RuntimeException("user not found"));
    BankAccount bankAccount = accountRepository.findById(cardDetails.accountId())
        .orElseThrow(() -> new RuntimeException("account not found"));
    Card card = Card.builder()
        .owner(user)
        .ownerAddress(cardDetails.ownerAddress())
        .billingAddress(cardDetails.billingAddress())
        .brand(cardDetails.brand())
        .account(bankAccount)
        .build();

    return cardRepository.save(card);
  }

  public List<Card> getAllCards() {
    return cardRepository.findAll();
  }

  public Card getCardById(Long id) {
    return cardRepository.findById(id).orElse(null);
  }

  public Card getCardByOwnerId(Long ownerId) {
    return cardRepository.findByOwner_Id(ownerId).orElse(null);
  }

  public Card getCardByAccountId(Long accountId) {
    return cardRepository.findByAccount_Id(accountId).orElse(null);
  }
}
