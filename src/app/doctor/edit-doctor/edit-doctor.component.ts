import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorInformationService } from '../doctor-information/doctor-information.service';
import { DoctorInformation } from '../doctor-information/doctor-information';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit  {
  consultationId!: number ; // Define consultationId to store the ID from the rout
  doctorFormInformation!: FormGroup;
  doctor!: Doctor;

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
    private doctorService : DoctorService,
    private doctorInformationService : DoctorInformationService,
    private router: Router // Inject the Router service
  ) { }
  ngOnInit(): void {
    this.initDoctorForm();
    this.fetchDoctor();
    console.log("hello")
  }
  initDoctorForm() {
    this.doctorFormInformation = this.fb.group({
      price: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]]
    });
  }
  fetchDoctor(){
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (retrievedDoctor:Doctor) =>{
        this.doctor = retrievedDoctor;
        this.populateDoctorForm();
      },
      (error) => {
        console.error('Error fetching doctor data:', error);

      }
    )
  }

  populateDoctorForm() {
    this.doctorFormInformation.patchValue({
      price: this.doctor.doctorInformation.price,
      phoneNumber: this.doctor.doctorInformation.phoneNumber,
      startTime: this.doctor.doctorInformation.startTime,
      endTime: this.doctor.doctorInformation.endTime
    });
  }

  onSubmit() {
   
      // Update the 'doctor' object with form values
      this.doctor.doctorInformation = {...this.doctorFormInformation.value };

      // Implement your logic to save/update the doctor's information here
      // You can access the updated data in 'this.doctor'
      console.log('Updated Doctor Data:', this.doctor.doctorInformation);

      // You can call a service to update the doctor data if needed

      this.doctorInformationService.updateOneDoctorInformation(this.doctor.id,this.doctor.doctorInformation).subscribe(
        (updatedDoctor: DoctorInformation) => {
          console.log('Doctor updated successfully:', updatedDoctor);
          this.router.navigate(['/doctors/details']);

        },
        (error) => {
          console.error('Error updating doctor data:', error);
        }
      );
    }
  }


