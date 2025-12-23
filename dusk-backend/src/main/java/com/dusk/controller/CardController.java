package com.dusk.controller;

import com.dusk.model.Card;
import com.dusk.service.CardService;
import com.dusk.dtos.CardInput;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class CardController {
  private final CardService cardService;

  public CardController(CardService cardService) {
    this.cardService = cardService;
  }

  @QueryMapping(name = "cards")
  public List<Card> allCards() {
    return cardService.getAllCards();
  }

  @QueryMapping
  public Card card(
      @Argument Long cardId,
      @Argument Long accountId,
      @Argument Long ownerId) {
    if (cardId != null)
      return cardService.getCardById(cardId);
    if (accountId != null)
      return cardService.getCardByAccountId(accountId);
    if (ownerId != null)
      return cardService.getCardByOwnerId(ownerId);
    return null;
  }

  @MutationMapping
  public Card createCard(@Argument CardInput cardDetails) {
    return cardService.createCard(cardDetails);
  }
}
