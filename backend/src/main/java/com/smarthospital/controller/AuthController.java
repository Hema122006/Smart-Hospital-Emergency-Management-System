package com.smarthospital.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.smarthospital.entity.Admin;
import com.smarthospital.service.AdminService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AdminService adminService;

    public AuthController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {

        try {

            String username = request.get("username");
            String password = request.get("password");

            Admin admin = adminService.login(username, password);

            return ResponseEntity.ok(
                Map.of(
                    "message", "Login successful",
                    "id", admin.getId(),
                    "username", admin.getUsername(),
                    "role", "ADMIN"
                )
            );

        } catch (RuntimeException e) {

            return ResponseEntity
                    .status(401)
                    .body(Map.of("message", "Invalid username or password"));
        }
    }
}