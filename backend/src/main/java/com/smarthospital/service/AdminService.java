package com.smarthospital.service;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Admin;
import com.smarthospital.repository.AdminRepository;

@Service
public class AdminService {

    private final AdminRepository repository;

    public AdminService(AdminRepository repository) {
        this.repository = repository;
    }

    public Admin login(String username, String password) {

        Admin admin = repository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!admin.getPassword().equals(password)) {
            throw new RuntimeException("Invalid username or password");
        }

        return admin;
    }
}