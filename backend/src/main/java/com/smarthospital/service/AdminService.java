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

        System.out.println("LOGIN USERNAME = [" + username + "]");
        System.out.println("LOGIN PASSWORD = [" + password + "]");

        Admin admin = repository.findByUsername(username.trim())
                .orElseThrow(() -> new RuntimeException("USERNAME NOT FOUND"));

        System.out.println("DB USERNAME = [" + admin.getUsername() + "]");
        System.out.println("DB PASSWORD = [" + admin.getPassword() + "]");

        if (!admin.getPassword().trim().equals(password.trim())) {
            throw new RuntimeException("PASSWORD MISMATCH");
        }

        System.out.println("LOGIN SUCCESS");

        return admin;
    }
}