package com.dusk.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.model.Settings;

public interface SettingsRepository extends JpaRepository<Settings, Long> {
  Optional<Settings> findByOwner_Id(Long id);
}
