import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../components/shared-service/shared-service.component';
import { PatientService } from '../patient/patient.service';
import { SessionService } from '../session/session.service';
import { Patient } from '../patient/patient';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
    public doctors!: Doctor[];
    public consultationTimes: string[] = [];
    public liveDay: string = '';
    public selectedConsultationTime: string = '';
    public patient!: Patient;
    public imagePath! : string





    constructor(
        private doctorService: DoctorService,
        private patientService: PatientService,
        private router: Router,
        private sharedService: SharedService,
        private sessionService : SessionService


        ) { }

    ngOnInit() {
        this.getDoctors();
        this.generateConsultationTimes();
        this.updateLiveDay(); // Update live day when component initializes
        this.fetchPatient();
        this.imagePath = '../../assets/img/05.jpg'
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

    public getDoctors(): void {
        this.doctorService.getDoctors().subscribe(
            (response: Doctor[]) => {
                this.doctors = response;
                console.log(response);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    generateConsultationTimes(): void {
        const currentTime = new Date();
        const consultationInterval = 15; // Interval in minutes
        const numberOfTimeSlots = 6; // Number of time slots

        // Round up the current time to the nearest multiple of consultationInterval
        const currentTimeRounded = new Date(
            Math.ceil(currentTime.getTime() / (consultationInterval * 60000)) * (consultationInterval * 60000)
        );

        for (let i = 0; i < numberOfTimeSlots; i++) {
            const timeSlot = new Date(currentTimeRounded.getTime() + i * consultationInterval * 60000);
            const formattedTime = this.formatTimeSlot(timeSlot);
            this.consultationTimes.push(formattedTime);
        }
    }

    updateLiveDay(): void {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const day = daysOfWeek[currentDate.getDay()];
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const date = currentDate.getDate();
        this.liveDay = `${day}, ${month} ${date}`;
    }

    formatTimeSlot(time: Date): string {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    onTimeClick(selectedTime: string, doctorId: number) {
        console.log("doctorId",doctorId)
        this.selectedConsultationTime = selectedTime;
        this.sharedService.setSelectedTime(selectedTime);

        console.log(selectedTime)
        this.router.navigate([`/patients/questionnaire/${doctorId}`]);
    }
    
}
