import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from './prescription';
import { Consultation } from 'src/app/consultation/consultation';
import { ConsultationService } from 'src/app/consultation/consultation.service';
import { SessionService } from 'src/app/session/session.service';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {
  consultationId!: number;
  doctorId!: any;
  patientId!: any;
  prescriptionForm!: FormGroup;
  consultation!: Consultation;
  selectedFile: File | null = null; // To store the selected PDF file


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    private sessionService: SessionService,
    private prescriptionService: PrescriptionService,
    private router : Router


  ) {
    this.prescriptionForm = this.fb.group({
      medicines: this.fb.array([]) // Initialize an empty array for medicines
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      this.fetchConsultation(this.consultationId);
    });
    this.doctorId = this.sessionService.getDoctorId();
  }

  get medicines() {
    return this.prescriptionForm.get('medicines') as FormArray;
  }


  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
      // You can do further processing here, such as displaying the file name:
      // const fileName = this.selectedFile.name;
      // console.log('Selected file:', fileName);
    } else {
      // Reset the selectedFile if no file is selected
      this.selectedFile = null;
    }
  }

  onSubmit() {
    if (this.selectedFile !== null) {
      // Handle the file submission here, e.g., sending it to the server
      // using Angular's HttpClient or your preferred method.
    } else {
      // Handle the case where no file is selected
      console.error('No file selected.');
    }
  }
  fetchConsultation(id: number) {
    this.consultationService.getConsultationById(id).subscribe(
      (consultation: Consultation) => {
        this.consultation = consultation;
        this.patientId = consultation.patient.id;
        console.log("hi patient", this.patientId);
        console.log("***", consultation);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMedicine() {
    const medicine = this.fb.group({
      medicineName: ['', Validators.required],
      morning: [null, Validators.required],
      afternoon: [null, Validators.required],
      night: [null, Validators.required],
    });
    this.medicines.push(medicine);
  }

  // onSubmit() {
  //   if (this.prescriptionForm.valid) {
  //     const medicinesData = this.prescriptionForm.value.medicines.map((medicine: any) => ({
  //       medicineName: medicine.medicineName,
  //       morning: medicine.morning,
  //       afternoon: medicine.afternoon,
  //       night: medicine.night,
  //     }
  //     ));

  //     // Now you can create a prescription using this data
  //     const prescriptionData = {
  //       medicines: medicinesData,
  //     };

  //     this.prescriptionService.createPrescription(prescriptionData, this.doctorId, this.patientId).subscribe(
  //       (createdPrescription : Prescription) => {
  //         console.log('Prescription created:', createdPrescription);
  //         this.router.navigateByUrl(`/doctors/close/${this.consultationId}`)
  //       },
  //       (error) => {
  //         // Handle any errors here, for example, show an error message
  //         console.error('Error creating prescription:', error);
  //       }
  //     )





  //     // Use prescriptionData for your HTTP request to the backend
  //     // For example, call your prescription creation service method here
  //     // Pass prescriptionData as the request body
  //   }
  // }
}
