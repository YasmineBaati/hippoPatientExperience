import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Prescription } from './prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Upload a prescription
  createPrescription(prescriptionData: any, doctorId: any, patientId : any): Observable<Prescription> {
    return this.http.post<Prescription>(`${this.apiServerUrl}/api/prescriptions/${doctorId}/${patientId}`, prescriptionData);
  }

  // Get all prescriptions
  getAllPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiServerUrl}/api/prescriptions`);
  }

  // Get a prescription by ID
  getPrescriptionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/${id}`);
  }

  

  // Delete a prescription by ID
  deletePrescription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }
}
