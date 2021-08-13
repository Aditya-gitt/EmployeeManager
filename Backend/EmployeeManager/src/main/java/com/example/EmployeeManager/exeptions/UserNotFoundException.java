package com.example.EmployeeManager.exeptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String s) {
        super(s);
    }
}
