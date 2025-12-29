package com.dusk.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "settings")
public class Settings {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne(fetch = FetchType.LAZY, mappedBy = "settings")
  private User owner;

  @Column(name = "dark_mode", nullable = false)
  @Builder.Default
  private boolean darkMode = false;

  @Column(name = "language", length = 5, nullable = false)
  @Builder.Default
  private String language = "en";

  @Column(name = "reduce_motion", nullable = false)
  @Builder.Default
  private boolean reduceMotion = false;

  @Column(name = "email_notifications", nullable = false)
  @Builder.Default
  private boolean emailNotifications = true;

  @Column(name = "push_notifications", nullable = false)
  @Builder.Default
  private boolean pushNotifications = true;

  @Column(name = "analytics_enabled", nullable = false)
  @Builder.Default
  private boolean analyticsEnabled = true;

  @Column(name = "timezone", length = 50, nullable = false)
  @Builder.Default
  private String timezone = "UTC";
}
