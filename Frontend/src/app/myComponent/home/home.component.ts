import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

employees!: Employee[];
  employeesDup!: Employee[];
  editEmployee!: Employee;
  deleteEmployeeId!: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        this.employeesDup = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onOpenModal(employee: any, mode: string) : void {
    const container = document.getElementById("main-container");
    const button = document.createElement('button');
    button.type="button";
    button.style.display = "none";

    button.setAttribute("data-bs-toggle", "modal");

    if(mode==="add") {
      button.setAttribute("data-bs-target", "#addModal");
    }
    if(mode==="edit") {
      button.setAttribute("data-bs-target", "#updateModal");
      this.editEmployee = employee;
    }
    if(mode==="delete") {
      this.deleteEmployeeId = employee.id;
      button.setAttribute("data-bs-target", "#deleteModal");
    }
    container?.appendChild(button);
    button.click();
  }

  onAddEmployee(addForm: NgForm): void {
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  onUpdateEmployee(editForm: NgForm): void {
      this.employeeService.updateEmployee(editForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteEmployee(): void {
      this.employeeService.deleteEmployee(this.deleteEmployeeId).subscribe(
      (response: void) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSerchEmployee(key: string): void {
    let results: Employee[] = [];

    results.length=0;
    this.employees = this.employeesDup;
    for(const emp of this.employees) {
      if(emp.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || emp.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || emp.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || emp.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        results.push(emp);
      }
      if(key && results.length==0) {
        results.length=0;
      }
      else {
        if(!key && results.length==0) {
          this.getEmployees();
        }
      }
      this.employees = results;
      if (!key) {
        this.getEmployees();
      }
      
    }
  }

  loadEmployees(): void {
    var column = ""
  }
}
