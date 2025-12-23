package com.dusk.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.model.BankAccount;

public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
  Optional<BankAccount> findBankAccountByOwner_Id(Long id);

  Optional<BankAccount> findBankAccountByCard_Id(Long id);
}
