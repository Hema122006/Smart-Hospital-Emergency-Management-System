package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Ambulance;
import com.smarthospital.repository.AmbulanceRepository;

@Service
public class AmbulanceService {

    private final AmbulanceRepository repository;

    public AmbulanceService(AmbulanceRepository repository) {
        this.repository = repository;
    }

    public List<Ambulance> getAll() {
        return repository.findAll();
    }

    public Ambulance save(Ambulance ambulance) {
        return repository.save(ambulance);
    }

    public Ambulance update(Long id, Ambulance ambulance) {

        Ambulance old = repository.findById(id).orElseThrow();

        old.setVehicleNo(ambulance.getVehicleNo());
        old.setDriver(ambulance.getDriver());
        old.setStatus(ambulance.getStatus());

        return repository.save(old);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
    public Ambulance changeStatus(Long id) {

    Ambulance ambulance = repository.findById(id).orElseThrow();

    switch (ambulance.getStatus()) {

        case "Available":
            ambulance.setStatus("On Duty");
            break;

        case "On Duty":
            ambulance.setStatus("Maintenance");
            break;

        default:
            ambulance.setStatus("Available");
    }

    return repository.save(ambulance);
}
}