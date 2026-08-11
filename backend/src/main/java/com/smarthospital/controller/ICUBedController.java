package com.smarthospital.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.ICUBed;
import com.smarthospital.service.ICUBedService;

@RestController
@RequestMapping("/api/icu-beds")
@CrossOrigin(origins = "http://localhost:5173")
public class ICUBedController {

    private final ICUBedService service;

    public ICUBedController(ICUBedService service) {
        this.service = service;
    }

    @GetMapping
    public List<ICUBed> getAll() {
        return service.getAll();
    }

    @PostMapping
    public ICUBed save(@RequestBody ICUBed bed) {
        return service.save(bed);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}