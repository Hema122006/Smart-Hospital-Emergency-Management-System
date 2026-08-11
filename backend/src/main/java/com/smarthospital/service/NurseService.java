package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Nurse;
import com.smarthospital.repository.NurseRepository;

@Service
public class NurseService {

    private final NurseRepository repository;

    public NurseService(NurseRepository repository) {
        this.repository = repository;
    }

    public List<Nurse> getAll() {
        return repository.findAll();
    }

    public Nurse save(Nurse nurse) {
        return repository.save(nurse);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Nurse toggleAvailability(Long id) {

        Nurse nurse = repository.findById(id).orElseThrow();

        nurse.setAvailable(!nurse.isAvailable());

        return repository.save(nurse);
    }
}