package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.BloodBank;
import com.smarthospital.service.BloodBankService;

@RestController
@RequestMapping("/api/blood-bank")
@CrossOrigin(origins = "http://localhost:5173")
public class BloodBankController {

    private final BloodBankService service;

    public BloodBankController(BloodBankService service) {
        this.service = service;
    }

    @GetMapping
    public List<BloodBank> getAll() {
        return service.getAll();
    }

    @PostMapping
    public BloodBank save(@RequestBody BloodBank blood) {
        return service.save(blood);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}/add")
    public BloodBank addUnit(@PathVariable Long id) {
        return service.addUnit(id);
    }

    @PutMapping("/{id}/issue")
    public BloodBank issueUnit(@PathVariable Long id) {
        return service.issueUnit(id);
    }
}