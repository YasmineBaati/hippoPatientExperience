import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environment';
import { Review } from './review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public createReview(review: any, doctorId: any, patientId: any): Observable<Review> {
    const url = `${this.apiServerUrl}/api/reviews/${doctorId}/${patientId}`; // Adjust the endpoint as needed
    return this.http.post<Review>(url, review);
  }

}
