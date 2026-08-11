package com.smarthospital.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "emergencies")
public class Emergency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private int age;
    private String gender;
    private String emergencyType;
    private String priority;
    private String doctor;
    private String status;

    private String bloodGroup;
    private String contact;
    private String icuRequired;
    private String notes;
    private String time;
    private LocalDateTime createdAt;

    public Emergency() {}

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();

        if (status == null || status.isBlank()) {
            status = "Pending";
        }

        if (doctor == null || doctor.isBlank()) {
            doctor = "Not Assigned";
        }
    }

    // ---------- Getters & Setters ----------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmergencyType() {
        return emergencyType;
    }

    public void setEmergencyType(String emergencyType) {
        this.emergencyType = emergencyType;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getIcuRequired() {
        return icuRequired;
    }

    public void setIcuRequired(String icuRequired) {
        this.icuRequired = icuRequired;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public String getTime() {
    return time;
}

public void setTime(String time) {
    this.time = time;
}

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}