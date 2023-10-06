import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor/doctor.service';
import { Doctor } from '../doctor/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../session/session.service';
import { ReviewService } from '../review/review.service';
import { Review } from '../review/review';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  public thisDoctor!: Doctor;
  public doctorId: any;
  public patientId: any;
  public patient!: Patient
  public reviewForm!: FormGroup;
  public rate = 0;




  constructor(
    private doctorService: DoctorService,
    private reviewService: ReviewService,
    private sessionService: SessionService,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private fb: FormBuilder

  ) { }


  ngOnInit(): void {
    // Fetch patient data first
    this.patientId = this.sessionService.getPatientId();
    this.patientService.getOnePatient(this.patientId).subscribe(
      (response: Patient) => {
        console.log("Patient data", response);
        this.patient = response;

        // Fetch doctor data once patient data is available
        this.route.params.subscribe(params => {
          this.doctorId = +params['id']; // Convert to number
          if (this.doctorId) {
            this.fetchDoctor();
          }
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

    console.log(this.rate);

    this.reviewForm = this.fb.group({
      rate: [this.rate, Validators.required],
      comment: ['', Validators.required]
    });
  }

  // ... Rest of your component code


  fetchDoctor() {
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (oneDoctor: Doctor) => {
        console.log(oneDoctor)
        this.thisDoctor = oneDoctor
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  public calculateAverageRating(reviews: any[]): number {
    if (reviews.length === 0) {
      return 0; // Return 0 if there are no reviews to avoid NaN
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
    return totalRating / reviews.length;

  }

  addReview() {
    const rate = this.rate;
    const comment = this.reviewForm.get('comment')?.value;

    if (comment !== undefined) {
      const reviewData = {
        rate: rate,
        comment: comment
      };

      this.reviewService.createReview(reviewData, this.doctorId, this.patientId).subscribe(
        (response: Review) => {
          console.log("added review", response);

          // Update the doctor's reviews array with the new review
          this.thisDoctor.doctorReviews.push(response);

          // Clear the form and reset the rate
          this.reviewForm.reset({ rate: 0, comment: '' });
          this.rate = 0;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

}
