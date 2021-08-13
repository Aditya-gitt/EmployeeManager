package com.example.EmployeeManager.repo;

import com.example.EmployeeManager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    
    Optional<Employee> findEmployeeById(int id);

    void deleteEmployeeById(int id);
}
