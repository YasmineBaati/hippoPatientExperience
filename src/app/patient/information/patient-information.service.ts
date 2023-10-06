import { Injectable } from '@angular/core';
import { PatientInformation } from './patientInformation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientInformationService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public addPatientInformation(PatientId : any, PatientInformation : PatientInformation): Observable<PatientInformation> {
    return this.http.post<PatientInformation> (`${this.apiServerUrl}/api/patientInformations/${PatientId}`, PatientInformation);
  }
  updatePatientInformation(patientId: any, patientInformation: PatientInformation): Observable<PatientInformation> {
    return this.http.put<PatientInformation>(`${this.apiServerUrl}/api/patientInformations/${patientId}`, patientInformation);
  }

  getPatientInformation(patientId: any): Observable<PatientInformation | null> {
    return this.http.get<PatientInformation | null>(`${this.apiServerUrl}/api/patientInformations/${patientId}`);
  }
}
