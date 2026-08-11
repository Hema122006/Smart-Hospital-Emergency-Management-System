package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smarthospital.entity.Settings;

public interface SettingsRepository extends JpaRepository<Settings, Long> {

}