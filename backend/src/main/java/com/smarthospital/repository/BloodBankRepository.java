package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.BloodBank;

public interface BloodBankRepository extends JpaRepository<BloodBank, Long> {

}