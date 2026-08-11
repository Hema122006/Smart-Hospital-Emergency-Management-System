package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.Nurse;

public interface NurseRepository extends JpaRepository<Nurse, Long> {
}