import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { Consultation } from 'src/app/consultation/consultation';
import { ConsultationService } from 'src/app/consultation/consultation.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Cons, Subscription, timer } from 'rxjs';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  public pendingConsultations: Consultation[] = [];
  public acceptedConsultations: Consultation[] = [];
  consultation: Consultation | undefined;
  consultations!: Consultation[];
  consultationId: number | undefined; // Define consultationId to store the ID from the rout
  doctor!: Doctor;
  doctorId : any;
  private subscriptions: Subscription[] = [];
  remainingTimes: { [key: string]: string } = {};
  enableVideoCall: { [key: string]: boolean } = {}; // Add this



  constructor(
    private consultationService: ConsultationService,
    private doctorService: DoctorService,
    private sessionService : SessionService,
    private route: ActivatedRoute, // Inject ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.doctorId = this.sessionService.getDoctorId()
    console.log("doctorId",this.doctorId)
    this.getDoctor()
    this.getConsultations();

    // this.initCountdownTimers()
  }
  ngOnDestroy(): void {
    // Unsubscribe from timers to avoid memory leaks
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  

  private initCountdownTimers(): void {
    // Initialize countdown timers for each consultation
    this.consultations.forEach((consultation) => {
      const timerObservable = timer(0, 1000); // Update every 1 second
  
      const subscription = timerObservable.subscribe(() => {

        const startTimeMillis = new Date(consultation.startTime).getTime();
        const remainingSeconds = Math.max(0, Math.floor((startTimeMillis - Date.now()) / 1000));
  
        if (remainingSeconds <= 0  && consultation.status ==="accepted") {
          this.remainingTimes[consultation.id] = 'Consultation started';
          this.enableVideoCall[consultation.id] = true; // Disable the button

          subscription.unsubscribe(); // Stop the timer when the consultation starts
        } else {
          const hours = Math.floor(remainingSeconds / 3600);
          const minutes = Math.floor((remainingSeconds % 3600) / 60);
          const seconds = remainingSeconds % 60;
          this.remainingTimes[consultation.id] = `${hours}h ${minutes}m ${seconds}s`;
        }

      });
  
      this.subscriptions.push(subscription); // Add the subscription to the list
    });
  }


  public getDoctor() {
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (response : Doctor) => {
        this.doctor = response
        console.log(this.doctor)
      },
      (error : HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  public getConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        console.log("consultations",response)
        this.consultations = response
        this.initCountdownTimers();

        
        this.pendingConsultations = response.filter(consultation => consultation.status === 'pending');
        this.acceptedConsultations = response.filter(consultation => consultation.status === 'accepted');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openVideoCall(link:string): void {
    window.open(`https://localhost:3003/r/${link}`);
  }
  acceptConsultation() {
    if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'accepted').subscribe(
        (updatedConsultation: Consultation) => {
          this.consultation = updatedConsultation;
          this.router.navigateByUrl('/doctors/progress');

        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  declineConsultation() {
    if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'declined').subscribe(
        (updatedConsultation: Consultation) => {
          this.consultation = updatedConsultation;
          this.router.navigateByUrl('/doctors/dashboard');

        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
