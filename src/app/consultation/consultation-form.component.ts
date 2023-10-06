import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';
import { SessionService } from '../session/session.service';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']

})
export class ConsultationFormComponent implements OnInit, OnDestroy {
  consultationForm: FormGroup;
  consultations: Consultation[] = [];
  public patient!: Patient;
  public patientId!: any;
  countdownTimers: { [key: string]: Observable<number> } = {};
  private subscriptions: Subscription[] = [];
  remainingTimes: { [key: string]: string } = {};
  enableVideoCall: { [key: string]: boolean } = {}; // Add this



  

  constructor(private fb: FormBuilder,
    private consultationService: ConsultationService,
    private patientService: PatientService,
    private sessionService : SessionService,

    ) {

    this.consultationForm = this.fb.group({
      status: ['pending', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      concerns: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      diseases: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      previous: [false] // Set the default value to false
      
    }); 
  }
  ngOnInit(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        console.log(response)
        this.patientId = this.sessionService.getPatientId()
        this.consultations = response;
        this.initCountdownTimers();

      },
      (error) => {
        console.error('Failed to fetch consultations', error);
      }
    );

    this.fetchPatient();
  }


  public fetchPatient(): void {
    this.patientService.getOnePatient(this.sessionService.getPatientId()).subscribe(
        (response : Patient) => {
            console.log(response)
            this.patient = response
        },
        (error: HttpErrorResponse) => {
            console.log(error)
        }
    )
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

  openVideoCall(link:string): void {
    window.open(`https://localhost:3003/r/${link}`);
  }
  

  // public onSubmit(): void {
  //   this.consultationService.createConsultation(this.consultationForm.value).subscribe(
  //     (response: Consultation) =>{
  //       console.log(response);

  //     },
  //     (error: HttpErrorResponse) =>{
  //       alert(error.message);
  //     }
  //   );
  //   };

  };

