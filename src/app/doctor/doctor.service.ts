import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/api/doctors`);
  }
  public getDoctorById(doctorId:any): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiServerUrl}/api/doctors/${doctorId}`)
  }

  public getOneDoctor(doctorId: any): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiServerUrl}/api/doctors/${doctorId}`);
  }
}
