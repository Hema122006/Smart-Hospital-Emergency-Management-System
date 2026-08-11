package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.ICUBed;
import com.smarthospital.repository.ICUBedRepository;

@Service
public class ICUBedService {

    private final ICUBedRepository repository;

    public ICUBedService(ICUBedRepository repository) {
        this.repository = repository;
    }

    public List<ICUBed> getAll() {
        return repository.findAll();
    }

    public ICUBed save(ICUBed bed) {
        return repository.save(bed);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}