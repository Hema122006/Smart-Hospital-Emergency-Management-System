package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.Ambulance;

public interface AmbulanceRepository extends JpaRepository<Ambulance, Long> {

}