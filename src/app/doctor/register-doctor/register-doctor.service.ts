import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environment';
import { RegisterDoctor } from './register-doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDoctorService {

  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public registerDoctor(newDoctor: RegisterDoctor): Observable<RegisterDoctor> {
    return this.http.post<RegisterDoctor>(`${this.apiServerUrl}/api/doctors/register`, newDoctor);
  }

}
