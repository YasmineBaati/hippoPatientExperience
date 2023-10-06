import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';
import { Doctor } from 'src/app/doctor/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-declined-consultation',
  templateUrl: './declined-consultation.component.html',
  styleUrls: ['./declined-consultation.component.css']
})
export class DeclinedConsultationComponent implements OnInit {
  public declinedConsultations: Consultation[] = [];
  public doctor!: Doctor
  doctorId : any;

  constructor(private consultationService: ConsultationService,
    private sessionService : SessionService,
    private doctorService : DoctorService
    ) { }


  ngOnInit(): void {
    this.getDeclinedConsultations();
    this.getDoctor()
    this.doctorId = this.sessionService.getDoctorId()
  }

  getDoctor() {
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (response : Doctor) => {
        this.doctor = response
        
      },
      (error:HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  getDeclinedConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.declinedConsultations = response.filter(consultation => consultation.status === 'declined');
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
