package com.smarthospital.controller;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Settings;
import com.smarthospital.service.SettingsService;

@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins = "http://localhost:5173")
public class SettingsController {

    private final SettingsService service;

    public SettingsController(SettingsService service) {
        this.service = service;
    }

    @GetMapping
    public Settings getSettings() {
        return service.getSettings();
    }

    @PostMapping
    public Settings saveSettings(@RequestBody Settings settings) {
        return service.saveSettings(settings);
    }
}