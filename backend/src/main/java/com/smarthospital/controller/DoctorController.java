package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Doctor;
import com.smarthospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    @Autowired
    private DoctorService service;

    @GetMapping
    public List<Doctor> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Doctor save(@RequestBody Doctor doctor) {
        return service.save(doctor);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}