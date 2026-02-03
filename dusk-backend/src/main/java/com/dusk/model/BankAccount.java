package com.dusk.model;

import com.dusk.enums.AccountStatus;
import com.dusk.enums.AccountType;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder.Default;

import java.time.LocalDateTime;

@Entity
@Table(name = "bank_account")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BankAccount {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @Column(name = "account_number", unique = true, nullable = false)
  private String accountNumber;

  @NotNull
  private String name;

  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "owner", nullable = false)
  private User owner;

  @NotNull
  @Enumerated(EnumType.STRING)
  private AccountType type;

  @NotNull
  @Enumerated(EnumType.STRING)
  private AccountStatus status;

  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "card_id")
  private Card card;

  @Default
  @Min(0)
  private double balance = 0;

  @NotNull
  @Column(length = 3)
  private String currency;

  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  @Version
  private int version;

  @PrePersist
  protected void onCreate() {
    this.createdAt = LocalDateTime.now();
    this.status = AccountStatus.ACTIVE;
    if (this.accountNumber == null) {
      this.accountNumber = "ACC-" + java.util.UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }
  }

  @PreUpdate
  protected void onUpdate() {
    this.updatedAt = LocalDateTime.now();
  }
}
