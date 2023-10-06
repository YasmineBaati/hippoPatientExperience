import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { ReviewService } from 'src/app/review/review.service';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-connected-doctor-profile',
  templateUrl: './connected-doctor-profile.component.html',
  styleUrls: ['./connected-doctor-profile.component.css']
})
export class ConnectedDoctorProfileComponent implements OnInit {
  public thisDoctor!: Doctor;
  public rate = 0;


  constructor(
    private doctorService: DoctorService,
    private reviewService : ReviewService,
    private sessionService : SessionService
    ) { }


  ngOnInit(): void {
    this.getDoctor();
  }


  public getDoctor(): void {
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (response: Doctor) => {
        this.thisDoctor = response;
        console.log(response)
      }
      ,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public calculateAverageRating(reviews: any[]): number {
    if (reviews.length === 0) {
      return 0; // Return 0 if there are no reviews to avoid NaN
    }
  
    const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
    // console.log(totalRating)
    return totalRating / reviews.length;

  }
  

}
