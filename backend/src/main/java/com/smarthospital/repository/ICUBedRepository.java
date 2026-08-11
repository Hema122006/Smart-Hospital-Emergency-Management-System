package com.smarthospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smarthospital.entity.ICUBed;

public interface ICUBedRepository extends JpaRepository<ICUBed, Long> {

}