package com.smarthospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthospital.entity.Doctor;
import com.smarthospital.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository repository;

    public List<Doctor> getAll(){
        return repository.findAll();
    }

    public Doctor save(Doctor doctor){
        return repository.save(doctor);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

}