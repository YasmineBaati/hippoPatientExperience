import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import FormBuilder and Validators
import { RegisterDoctor } from './register-doctor'; // Make sure to import the Doctor model
import { RegisterDoctorService } from './register-doctor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'; // Import the Router service
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent{
  registerForm: FormGroup ; // Define a FormGroup to manage the form



  constructor(
    private formBuilder: FormBuilder,
    private registerDoctorService: RegisterDoctorService,
    private router: Router, // Inject the Router service
    private sessionService: SessionService

  ) {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      proficiency: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(128)]]
      // Add other form controls here based on the Doctor model
  })};



  public onSubmit(): void  {

      this.registerDoctorService.registerDoctor(this.registerForm.value).subscribe(
        (response: RegisterDoctor) => {
          console.log(response);
          this.sessionService.setDoctorId(response.id);
          console.log(this.sessionService.getDoctorId())
          this.router.navigate(['/doctors/dashboard']);
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      )
    }
  }
