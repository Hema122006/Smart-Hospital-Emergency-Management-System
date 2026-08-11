package com.smarthospital.service;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Admin;
import com.smarthospital.repository.AdminRepository;

@Service
public Admin login(String username, String password) {

    System.out.println("USERNAME RECEIVED = [" + username + "]");
    System.out.println("PASSWORD LENGTH = " +
            (password == null ? "NULL" : password.length()));

    Admin admin = repository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("Invalid username or password"));

    System.out.println("USERNAME FROM DB = [" + admin.getUsername() + "]");
    System.out.println("PASSWORD LENGTH FROM DB = " +
            (admin.getPassword() == null ? "NULL" : admin.getPassword().length()));

    if (!admin.getPassword().equals(password)) {
        System.out.println("PASSWORD DOES NOT MATCH");
        throw new RuntimeException("Invalid username or password");
    }

    System.out.println("PASSWORD MATCHED");

    return admin;
}