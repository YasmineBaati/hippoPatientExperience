import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';
import { Doctor } from 'src/app/doctor/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-completed-consultation',
  templateUrl: './completed-consultation.component.html',
  styleUrls: ['./completed-consultation.component.css']
})
export class CompletedConsultationComponent implements OnInit {
  public completedConsultations: Consultation[] = [];
  doctor!: Doctor
  doctorId : any;

  constructor(
    private consultationService: ConsultationService,
    private doctorService : DoctorService,
    private sessionService : SessionService
    ) { }

  ngOnInit(): void {
    this.getCompletedConsultations();
    this.getDoctor()
    this.doctorId = this.sessionService.getDoctorId()
  }


  getDoctor() {
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (response : Doctor) => {
        this.doctor = response
      },
      (error : HttpErrorResponse) => {
        console.log(error)
      }
    )
  }
  getCompletedConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.completedConsultations = response.filter(consultation => consultation.status === 'completed');
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
