import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPatientService } from './login-patient.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session/session.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup ; // Define a FormGroup to manage the form

  constructor(  
    private formBuilder: FormBuilder,
    private loginPatientService: LoginPatientService,
    private router: Router,// Inject the Router service
    private sessionService : SessionService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginPatientService.logPatient(this.loginForm.value).subscribe(
        (response: any) => {
          // Handle successful login here
          console.log('Login successful:', response);
          // After successful login
          this.sessionService.setPatientId(response.id);
          console.log(this.sessionService.getPatientId())

          // Assuming you want to navigate to some dashboard after successful login
          this.router.navigate(['/patients/appointement']);
        },
        (error: HttpErrorResponse) => {
          // Handle login error here
          console.error('Login error:', error);
          // Display an alert or error message
          alert('Login failed. Please check your credentials.');
        }
      );
    }
  }
}