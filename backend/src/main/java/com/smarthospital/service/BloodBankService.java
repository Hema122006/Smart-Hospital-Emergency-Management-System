package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.BloodBank;
import com.smarthospital.repository.BloodBankRepository;

@Service
public class BloodBankService {

    private final BloodBankRepository repository;

    public BloodBankService(BloodBankRepository repository) {
        this.repository = repository;
    }

    public List<BloodBank> getAll() {
        return repository.findAll();
    }

    public BloodBank save(BloodBank blood) {
        return repository.save(blood);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // Add Blood Units
    public BloodBank addUnit(Long id) {

        BloodBank blood = repository.findById(id).orElseThrow();

        blood.setUnits(blood.getUnits() + 1);

        return repository.save(blood);
    }

    // Issue Blood Units
    public BloodBank issueUnit(Long id) {

        BloodBank blood = repository.findById(id).orElseThrow();

        if (blood.getUnits() > 0) {
            blood.setUnits(blood.getUnits() - 1);
        }

        return repository.save(blood);
    }
}