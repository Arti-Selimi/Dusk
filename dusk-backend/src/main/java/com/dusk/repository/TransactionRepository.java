package com.dusk.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
  List<Transaction> findByUser_Id(Long userId);
  List<Transaction> findByAccount_Id(Long accountId);
}
