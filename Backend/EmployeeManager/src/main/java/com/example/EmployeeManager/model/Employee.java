package com.example.EmployeeManager.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;
    private String name;
    private String jobTitle;
    private String email;
    private String phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String employeeCode;

    public Employee(String name, String jobTitle, String email, String phone, String imageUrl) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
    }

    public Employee(){};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}