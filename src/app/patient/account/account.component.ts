import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { SessionService } from 'src/app/session/session.service';
import { Patient } from '../patient';
import { PatientInformationService } from '../information/patient-information.service';
import { PatientInformation } from '../information/patientInformation';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  patientForm!: FormGroup;
  patient!: Patient;
  patientId!: any


  constructor(private formBuilder: FormBuilder,
    private patientService : PatientService,
    private patientInformationService : PatientInformationService,
    private sessionService: SessionService,
    private router : Router
    ) {}

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.fetchPatient()
    this.patientId = this.sessionService.getPatientId();
  }
  fetchPatient(){
    this.patientService.getOnePatient(this.sessionService.getPatientId()).subscribe(
      (retrievedPatient:Patient) =>{
        console.log(retrievedPatient)
        this.patient = retrievedPatient;
        this.patientForm.patchValue({
          firstName: retrievedPatient.firstName,
          lastName: retrievedPatient.lastName,
          age: retrievedPatient.patientInformation?.age,
          phoneNumber: retrievedPatient.patientInformation?.phoneNumber,
          gender: retrievedPatient.patientInformation?.gender
        });
      },
      (error) => {
        console.error('Error fetching doctor data:', error);
      }
    )
  }


  public onSubmit(): void {
    if (this.patientForm.valid) {
      // Handle form submission here
      const formData = this.patientForm.value;

      this.patientInformationService.addPatientInformation(this.patientId,formData).subscribe(
        (response : PatientInformation) =>{
          console.log(response)
          this.router.navigate(['/patients/appointement']);

        },
        (error: HttpErrorResponse) =>{
          console.log(error);
        }
      )
    }
  }
}
