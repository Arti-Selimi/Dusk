package com.dusk.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder.Default;

@Entity(name = "memberships")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Memberships {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "name", nullable = false)
  private String name;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "cm_users", nullable = false)
  private User user;

  @Column(nullable = false)
  private String membershipType;

  @Column(nullable = false)
  private int maxAccounts;

  @Column(nullable = false)
  private int maxCards;

  @Column(nullable = false)
  private boolean isPaid;

  @Column(nullable = false)
  private LocalDateTime startDate;

  @Column(nullable = false)
  private LocalDateTime expiryDate;

  @Default
  @Column(nullable = false)
  private boolean active = true;

  public void setActive(boolean input) {
    this.active = input;
  }

  @PrePersist
  protected void onCreate() {
    if ("Basic".equals(membershipType)) {
      this.maxAccounts = 2;
      this.maxCards = 2;
    } else if ("Premium".equals(membershipType)) {
      this.maxAccounts = 5;
      this.maxCards = 5;
    }

    this.startDate = LocalDateTime.now();
    this.expiryDate = LocalDateTime.now().plusMonths(1);
  }

  @PreUpdate
  protected void onUpdate() {
    this.expiryDate = LocalDateTime.now().plusMonths(1);
  }
}
