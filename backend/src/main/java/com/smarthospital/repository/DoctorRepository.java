package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}