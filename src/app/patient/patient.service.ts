import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private apiUrl: string = 'http://localhost:8080/api'; // adjust this to your backend URL

  constructor(private http: HttpClient) { }

  register(patient: Patient) {
    return this.http.post<Patient>(`${this.apiUrl}/patients/register`, patient);
  }

  public getOnePatient(patientId: any): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patients/${patientId}`);
  }
  updatePatient(patientId: any, updatedPatient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patients/${patientId}`, updatedPatient);
  }


}