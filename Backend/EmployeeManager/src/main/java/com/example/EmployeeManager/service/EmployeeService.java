package com.example.EmployeeManager.service;

import com.example.EmployeeManager.exeptions.UserNotFoundException;
import com.example.EmployeeManager.model.Employee;
import com.example.EmployeeManager.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service("EmployeeService")
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(int id) {
        return employeeRepo.findEmployeeById(id)
                .orElseThrow( () ->
                        new UserNotFoundException("User you want to find with id " + id + " was not found!"));
    }

    @Transactional
    public void deleteEmployeeById(int id) {
        employeeRepo.deleteEmployeeById(id);
    }
}
