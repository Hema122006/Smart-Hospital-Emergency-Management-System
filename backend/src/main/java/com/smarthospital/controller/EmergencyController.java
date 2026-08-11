package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Emergency;
import com.smarthospital.service.EmergencyService;

@RestController
@RequestMapping("/api/emergencies")
@CrossOrigin(origins = "http://localhost:5173")
public class EmergencyController {

    private final EmergencyService service;

    public EmergencyController(EmergencyService service) {
        this.service = service;
    }

    @GetMapping
    public List<Emergency> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Emergency save(@RequestBody Emergency emergency) {
        return service.save(emergency);
    }
    @PutMapping("/{id}/doctor")
public Emergency assignDoctor(@PathVariable Long id) {
    return service.assignDoctor(id);
}

@PutMapping("/{id}/icu")
public Emergency allocateICU(@PathVariable Long id) {
    return service.allocateICU(id);
}

@PutMapping("/{id}/ambulance")
public Emergency dispatchAmbulance(@PathVariable Long id) {
    return service.dispatchAmbulance(id);
}
@PutMapping("/{id}")
public Emergency update(
        @PathVariable Long id,
        @RequestBody Emergency emergency) {

    return service.update(id, emergency);
}

@DeleteMapping("/{id}")
public void delete(@PathVariable Long id) {
    service.delete(id);
}
}