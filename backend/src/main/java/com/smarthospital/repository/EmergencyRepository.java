package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.Emergency;

public interface EmergencyRepository
        extends JpaRepository<Emergency, Long> {
}