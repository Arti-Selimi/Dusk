package com.dusk.controller;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.dusk.dtos.SettingsInput;
import com.dusk.model.Settings;
import com.dusk.service.SettingsService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class SettingsController {
  private final SettingsService settingsService;

  @QueryMapping(name = "settings")
  public Settings getSettings(@Argument Long ownerId) {
    return settingsService.getSettingsByOwnerId(ownerId);
  }

  @MutationMapping(name = "createSettings")
  public Settings createSettings(@Argument SettingsInput settingsDetails) {
    return settingsService.createSettings(settingsDetails);
  }
}
