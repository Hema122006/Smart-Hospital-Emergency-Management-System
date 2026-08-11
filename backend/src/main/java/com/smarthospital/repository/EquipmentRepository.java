package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {

}