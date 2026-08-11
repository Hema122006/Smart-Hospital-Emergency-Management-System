package com.smarthospital.service;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Settings;
import com.smarthospital.repository.SettingsRepository;

@Service
public class SettingsService {

    private final SettingsRepository repository;

    public SettingsService(SettingsRepository repository) {
        this.repository = repository;
    }

    public Settings getSettings() {

        return repository.findAll()
                .stream()
                .findFirst()
                .orElse(null);
    }

    public Settings saveSettings(Settings settings) {

        Settings existing = getSettings();

        if (existing != null) {

            existing.setHospitalName(settings.getHospitalName());
            existing.setAddress(settings.getAddress());
            existing.setHotline(settings.getHotline());
            existing.setEmail(settings.getEmail());
            existing.setNotifications(settings.isNotifications());
            existing.setDarkMode(settings.isDarkMode());

            return repository.save(existing);
        }

        return repository.save(settings);
    }
}