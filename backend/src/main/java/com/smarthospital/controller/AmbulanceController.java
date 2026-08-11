package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Ambulance;
import com.smarthospital.service.AmbulanceService;

@RestController
@RequestMapping("/api/ambulances")
@CrossOrigin(origins = "http://localhost:5173")
public class AmbulanceController {

    private final AmbulanceService service;

    public AmbulanceController(AmbulanceService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ambulance> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Ambulance save(@RequestBody Ambulance ambulance) {
        return service.save(ambulance);
    }

    @PutMapping("/{id}")
    public Ambulance update(@PathVariable Long id,
                            @RequestBody Ambulance ambulance) {
        return service.update(id, ambulance);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}/status")
public Ambulance changeStatus(@PathVariable Long id) {
    return service.changeStatus(id);
}
}