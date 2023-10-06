import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Consultation } from 'src/app/consultation/consultation';
import { ConsultationService } from 'src/app/consultation/consultation.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  consultation!: Consultation;
  consultationId!: number;
  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      if (this.consultationId) {
        this.fetchConsultation (this.consultationId);
      }
    });
  } 

  fetchConsultation(id: number) {
    this.consultationService.getConsultationById(id).subscribe(
      (consultation:Consultation) =>{
        this.consultation = consultation;
        console.log(consultation)
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}


