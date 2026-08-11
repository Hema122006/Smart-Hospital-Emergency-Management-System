package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Equipment;
import com.smarthospital.repository.EquipmentRepository;

@Service
public class EquipmentService {

    private final EquipmentRepository repository;

    public EquipmentService(EquipmentRepository repository) {
        this.repository = repository;
    }

    public List<Equipment> getAll() {
        return repository.findAll();
    }

    public Equipment save(Equipment equipment) {
        return repository.save(equipment);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Equipment updateStatus(Long id) {

        Equipment equipment = repository.findById(id).orElseThrow();

        switch (equipment.getStatus()) {

            case "Available":
                equipment.setStatus("In Use");
                break;

            case "In Use":
                equipment.setStatus("Maintenance");
                break;

            default:
                equipment.setStatus("Available");
        }

        return repository.save(equipment);
    }
}