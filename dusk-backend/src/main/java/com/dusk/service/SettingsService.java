package com.dusk.service;

import com.dusk.repository.SettingsRepository;
import com.dusk.repository.UserRepository;
import org.springframework.stereotype.Service;
import com.dusk.model.Settings;
import com.dusk.model.User;
import com.dusk.dtos.SettingsInput;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SettingsService {
  private final SettingsRepository settingsRepository;
  private final UserRepository userRepository;

  public Settings createSettings(SettingsInput settingsDetails) {
    User owner = userRepository.findById(settingsDetails.ownerId())
        .orElseThrow(() -> new RuntimeException("User not found"));

    Settings settings = Settings.builder()
        .owner(owner)
        .build();

    return settingsRepository.save(settings);
  }

  public Settings getSettingsByOwnerId(Long ownerId) {
    return settingsRepository.findByOwner_Id(ownerId)
        .orElseGet(() -> {
          User owner = userRepository.findById(ownerId)
              .orElseThrow(() -> new RuntimeException("User not found"));

          Settings settings = Settings.builder()
              .owner(owner)
              .build();

          return settingsRepository.save(settings);
        });
  }
}
