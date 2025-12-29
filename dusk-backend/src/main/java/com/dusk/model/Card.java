package com.dusk.model;

import com.dusk.enums.CardBrand;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.FetchType;
import jakarta.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder.Default;

@Entity
@Table(name = "card")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Card {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "card_number", nullable = false)
  private String cardNumber;

  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "owner", nullable = false)
  private User owner;

  @Column(name = "expiry_date", nullable = false)
  private LocalDate expiryDate;

  @Column(name = "created_at", nullable = false)
  private LocalDate createdAt;

  @Column(name = "cvv", nullable = false)
  private int cvv;

  @Column(name = "owner_address", nullable = false)
  private String ownerAddress;

  @Column(name = "billing_address", nullable = false)
  private String billingAddress;

  @Column(name = "brand", nullable = false)
  private CardBrand brand;

  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "account", nullable = false)
  private BankAccount account;

  @Column(name = "is_active")
  @Default
  private boolean isActive = true;

  @PrePersist
  public void generateCardData() {
    if (this.cardNumber == null) {
      this.cardNumber = generateRandomCardNumber();
    }
    if (this.cvv == 0) {
      this.cvv = (int) (Math.random() * 900) + 100;
    }
    this.createdAt = LocalDate.now();
    this.expiryDate = this.createdAt.plusYears(5);
  }

  public String getFormattedExpiryDate() {
    return this.expiryDate.format(DateTimeFormatter.ofPattern("MM/yy"));
  }

  private String generateRandomCardNumber() {
    java.util.Random random = new java.util.Random();
    return String.format("%04d-%04d-%04d-%04d",
        random.nextInt(10000), random.nextInt(10000),
        random.nextInt(10000), random.nextInt(10000));
  }

}
