package com.dusk.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.model.Memberships;

public interface MembershipsRepository extends JpaRepository<Memberships, Long> {
  List<Memberships> findByUser_Id(Long userId);
}
