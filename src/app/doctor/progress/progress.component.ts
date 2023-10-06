import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Consultation } from 'src/app/consultation/consultation';
import { ConsultationService } from 'src/app/consultation/consultation.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Subscription, timer } from 'rxjs';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnDestroy {
  public pendingConsultations: Consultation[] = [];
  public acceptedConsultations: Consultation[] = [];
  doctor!: Doctor;
  doctorId: any;
  consultationId: number | undefined; // Define consultationId to store the ID from the route

  private subscriptions: Subscription[] = [];
  remainingTimes: { [key: string]: string } = {};
  enableVideoCall: { [key: string]: boolean } = {}; // Add this


  constructor(
    private consultationService: ConsultationService,
    private sessionService: SessionService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.doctorId = this.sessionService.getDoctorId();
    console.log("doctorId", this.doctorId)
    this.getDoctor();
    this.getConsultations();
  }

  ngOnDestroy(): void {
    // Unsubscribe from timers to avoid memory leaks
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private initCountdownTimers(): void {
    // Initialize countdown timers for each consultation
    this.acceptedConsultations.forEach((consultation) => {
      const timerObservable = timer(0, 1000); // Update every 1 second

      const subscription = timerObservable.subscribe(() => {
        const startTimeMillis = new Date(consultation.startTime).getTime();
        const remainingSeconds = Math.max(0, Math.floor((startTimeMillis - Date.now()) / 1000));

        if (remainingSeconds <= 0) {
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

  getDoctor() {
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (response: Doctor) => {
        this.doctor = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public getConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.acceptedConsultations = response.filter(consultation => consultation.status === 'accepted');
        this.initCountdownTimers();
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openVideoCall(link: string): void {
    window.open(`https://localhost:3003/r/${link}`);
  }
}
