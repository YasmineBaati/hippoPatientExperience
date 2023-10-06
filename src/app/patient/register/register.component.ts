import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session/session.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  patientForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private sessionService : SessionService
  ) {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }


  onSubmit() {
    this.patientService.register(this.patientForm.value).subscribe(
      (response: Patient) => {
        console.log(response);
        this.sessionService.setPatientId(response.id);
        console.log(this.sessionService.getPatientId())
        this.router.navigate(['/patients/account']);
      },
      (error: HttpErrorResponse) =>{
        console.log(error.message);
      }
    )
}

onFileSelected() {
  
}
}
