import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../patient/prescription/prescription.service';
import { SessionService } from '../session/session.service';
import { Prescription } from '../patient/prescription/prescription';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';

@Component({
  selector: 'app-all-prescriptions',
  templateUrl: './all-prescriptions.component.html',
  styleUrls: ['./all-prescriptions.component.css']
})
export class AllPrescriptionsComponent implements OnInit {
  allPrescriptions!: any; // Input for prescription information
  patientId!: any
  public patient!: Patient


  constructor(
    private prescriptionService : PrescriptionService,
    private sessionService : SessionService,
    private patientService : PatientService

    ) { }

    ngOnInit(): void {
      this.patientId = this.sessionService.getPatientId()
      console.log(this.patientId)
      this.prescriptionService.getAllPrescriptionsByPatientId(this.patientId).subscribe(
        (response : Prescription[]) => {
          this.allPrescriptions = response
          console.log((this.allPrescriptions))
        },
        (error:HttpErrorResponse) => {
          console.log(error)
        }
      )
      this.fetchPatient()
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
    
}
