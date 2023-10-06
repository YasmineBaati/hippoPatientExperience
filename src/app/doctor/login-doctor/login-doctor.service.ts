import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Don't forget to import Observable
import { environment } from 'src/environnement/environment';
import { LoginDoctor } from './login-doctor';
import { Doctor } from '../doctor';
import { Patient } from 'src/app/patient/patient';

@Injectable({
  providedIn: 'root'
})
export class LoginDoctorService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // Assuming `LoginDoctor` is a model/interface for the doctor's login data
  public logDoctor(loggedDoctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiServerUrl}/api/doctors/login`, loggedDoctor);
  }
  public logPatient(loggedPatient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiServerUrl}/api/patients/login`, loggedPatient);
  }

}
