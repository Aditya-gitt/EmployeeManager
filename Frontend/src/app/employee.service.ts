import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/login`)
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
  }

  public addEmployee(employee: any): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee)
  }

  public updateEmployee(employee: any): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee)
  }

  public findEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/update/${employeeId}`)
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
  }
}
