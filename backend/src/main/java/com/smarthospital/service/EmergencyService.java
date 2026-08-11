package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Emergency;
import com.smarthospital.repository.EmergencyRepository;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

@Service
public class EmergencyService {

    private final EmergencyRepository repository;

    public EmergencyService(EmergencyRepository repository) {
        this.repository = repository;
    }

    public List<Emergency> getAll() {
        return repository.findAll();
    }


    public Emergency save(Emergency emergency) {

    if (emergency.getStatus() == null) {
        emergency.setStatus("Pending");
    }

    emergency.setTime(
        LocalTime.now().format(
            DateTimeFormatter.ofPattern("hh:mm a")
        )
    );

    return repository.save(emergency);
}
public Emergency assignDoctor(Long id) {

    Emergency emergency = repository.findById(id).orElseThrow();

    emergency.setDoctor("Dr. Anitha");
    emergency.setStatus("Doctor Assigned");

    return repository.save(emergency);
}
public Emergency allocateICU(Long id) {

    Emergency emergency = repository.findById(id).orElseThrow();

    emergency.setIcuRequired("Yes");
    emergency.setStatus("ICU Allocated");

    return repository.save(emergency);
}
public Emergency dispatchAmbulance(Long id) {

    Emergency emergency = repository.findById(id).orElseThrow();

    emergency.setStatus("Ambulance Dispatched");

    return repository.save(emergency);
}
public Emergency update(Long id, Emergency updated) {

    Emergency emergency = repository.findById(id).orElseThrow();

    emergency.setPatientName(updated.getPatientName());
    emergency.setAge(updated.getAge());
    emergency.setGender(updated.getGender());
    emergency.setEmergencyType(updated.getEmergencyType());
    emergency.setPriority(updated.getPriority());
    emergency.setDoctor(updated.getDoctor());
    emergency.setStatus(updated.getStatus());
    emergency.setBloodGroup(updated.getBloodGroup());
    emergency.setContact(updated.getContact());
    emergency.setIcuRequired(updated.getIcuRequired());
    emergency.setNotes(updated.getNotes());

    return repository.save(emergency);
}

public void delete(Long id) {
    repository.deleteById(id);
}
}