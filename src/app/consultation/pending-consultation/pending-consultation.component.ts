import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';

@Component({
  selector: 'app-pending-consultation',
  templateUrl: './pending-consultation.component.html',
  styleUrls: ['./pending-consultation.component.css']
})
export class PendingConsultationComponent implements OnInit {
  consultation: Consultation | undefined;
  consultationId: number | undefined; // Define consultationId to store the ID from the rout

  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute, // Inject ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    // Get the consultation ID from the route parameters
    this.route.params.subscribe(params => {
      this.consultationId = +params['id']; // Convert to number
      if (this.consultationId) {
        this.fetchConsultation(this.consultationId);
      }
    });
  }

  fetchConsultation(consultationId: number) {
    this.consultationService.getConsultationById(consultationId).subscribe(
      (consultation: Consultation) => {
        this.consultation = consultation;
        console.log(consultation.patient.firstName)
      },
      (error) => {
        console.error(error);
      }
    );
  }


  acceptConsultation() {
    if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'accepted').subscribe(
        (updatedConsultation: Consultation) => {
          this.consultation = updatedConsultation;
          this.router.navigateByUrl('/doctors/dashboard');

        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  declineConsultation() {
    if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'declined').subscribe(
        (updatedConsultation: Consultation) => {
          this.consultation = updatedConsultation;
          this.router.navigateByUrl('/doctors/progress');

        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}

