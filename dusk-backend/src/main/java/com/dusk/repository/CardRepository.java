package com.dusk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dusk.model.Card;
import java.util.Optional;

public interface CardRepository extends JpaRepository<Card, Long> {
  Optional<Card> findByOwner_Id(Long ownerId);

  Optional<Card> findByAccount_Id(Long accountId);

    int countByOwner_Id(Long id);
}
