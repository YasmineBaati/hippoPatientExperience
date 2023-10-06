import { Component, Input, OnInit } from '@angular/core';
import { PrescriptionService } from './prescription.service';
import { SessionService } from 'src/app/session/session.service';
import { Prescription } from './prescription';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  patientId!: any
  prescrptionId!: number
  allPrescriptions!: any; // Input for prescription information
  onePrescription!: Prescription
  constructor(
    private prescriptionService : PrescriptionService,
    private sessionService : SessionService,
    private route : ActivatedRoute

    ) { }





  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.prescrptionId = +params['id']; // Convert to number
      if (this.prescrptionId) {
        this.fetchPrescrption();
      }
    });
    this.patientId = this.sessionService.getPatientId()
    console.log(this.patientId)
  }
  


  fetchPrescrption() {
    this.prescriptionService.getPrescriptionById(this.prescrptionId).subscribe(
      (onePres : Prescription) => {
        console.log(onePres)
        this.onePrescription = onePres
      },
      (error : HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  printPrescription() {
    window.print();
  }
}
