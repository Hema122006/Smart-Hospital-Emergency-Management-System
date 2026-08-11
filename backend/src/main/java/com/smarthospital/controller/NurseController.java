package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Nurse;
import com.smarthospital.service.NurseService;

@RestController
@RequestMapping("/api/nurses")
@CrossOrigin(origins = "http://localhost:5173")
public class NurseController {

    private final NurseService service;

    public NurseController(NurseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Nurse> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Nurse save(@RequestBody Nurse nurse) {
        return service.save(nurse);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}/availability")
    public Nurse toggleAvailability(@PathVariable Long id) {
        return service.toggleAvailability(id);
    }
}