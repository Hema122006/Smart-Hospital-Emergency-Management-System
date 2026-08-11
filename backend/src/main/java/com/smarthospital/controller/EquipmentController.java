package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Equipment;
import com.smarthospital.service.EquipmentService;

@RestController
@RequestMapping("/api/equipment")
@CrossOrigin(origins = "http://localhost:5173")
public class EquipmentController {

    private final EquipmentService service;

    public EquipmentController(EquipmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Equipment> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Equipment save(@RequestBody Equipment equipment) {
        return service.save(equipment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}/status")
    public Equipment changeStatus(@PathVariable Long id) {
        return service.updateStatus(id);
    }
}