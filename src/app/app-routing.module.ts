import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './patient/register/register.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { LoginComponent } from './patient/login/login.component';
import { AccountComponent } from './patient/account/account.component';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { ScoletteComponent } from './scolette/scolette.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { HomeComponent } from './home/home.component';
import { OneDoctorComponent } from './one-doctor/one-doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LoginDoctorComponent } from './doctor/login-doctor/login-doctor.component';
import { DashboardDoctorComponent } from './doctor/dashboard-doctor/dashboard-doctor.component';
import { PendingConsultationComponent } from './consultation/pending-consultation/pending-consultation.component';
import { CompletedConsultationComponent } from './consultation/completed-consultation/completed-consultation.component';
import { DeclinedConsultationComponent } from './consultation/declined-consultation/declined-consultation.component';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { DoctorInformationComponent } from './doctor/doctor-information/doctor-information.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { NoteComponent } from './note/note.component';
import { CreatePrescriptionComponent } from './doctor/prescription/create-prescription.component';
import { CloseConsultationComponent } from './consultation/close-consultation/close-consultation.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { ConnectedDoctorProfileComponent } from './doctor/connected-doctor-profile/connected-doctor-profile.component';
import { ProgressComponent } from './doctor/progress/progress.component';
import { HippoNavBarComponent } from './hippo-med/hippo-nav-bar/hippo-nav-bar.component';
import { HippoMedComponent } from './hippo-med/hippo-med.component';
import { DevisComponent } from './devis/devis.component';

const routes: Routes = [

  //PATIENT EXPERIENCE

  { path: 'patients/questionnaire/:id', component: QuestionnaireComponent },

  { path: 'patients/register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'patients/consultations', component: ConsultationFormComponent },
  { path: 'patients/appointement', component: DoctorComponent },
  { path: 'patients/payment', component: PaymentComponent },
  { path: 'patients/login', component: LoginComponent },
  { path: 'patients/documents', component: AllPrescriptionsComponent },
  { path: 'patients/documents/:id', component: PrescriptionComponent },
  { path: 'patients/account', component: AccountComponent },
  { path: 'patients/doctor/:id', component: DoctorProfileComponent },
  { path: 'our-doctors', component: DoctorsComponent },
  { path: 'one', component: OneDoctorComponent },
  {path: 'patients/devis', component: DevisComponent },


  //DOCTOR EXPERIENCE

  { path: 'doctors/login', component: LoginDoctorComponent },
  { path: "doctors/register", component: RegisterDoctorComponent },
  { path: 'doctors/dashboard', component: DashboardDoctorComponent},
  { path: 'doctors/pending-consultation/:id', component: PendingConsultationComponent },
  { path: 'doctors/completed-consultation', component: CompletedConsultationComponent},
  { path: 'doctors/declined-consultation', component: DeclinedConsultationComponent},
  { path: 'doctors/details', component: DoctorInformationComponent },
  { path: 'doctors/consultation/:id', component: PatientCardComponent },
  { path: 'doctors/note/:id', component: NoteComponent },
  { path: 'doctors/prescription/:id', component: CreatePrescriptionComponent },
  { path: 'doctors/close/:id', component: CloseConsultationComponent },
  { path: 'doctors/edit', component: EditDoctorComponent},
  { path: 'doctors/profile', component: ConnectedDoctorProfileComponent },
  { path: 'doctors/progress', component: ProgressComponent },


  //HIPPOMED EXPERIANCE

  { path: 'hippomed', component: HippoMedComponent },



  //ADMIN EXPERIENCE





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
