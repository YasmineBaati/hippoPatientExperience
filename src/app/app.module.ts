import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterOutlet } from "@angular/router";
import { RegisterComponent } from './patient/register/register.component';
import { QuestionnaireComponent } from './patient/questionnaire/questionnaire.component';
import { LoginComponent } from './patient/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './patient/payment/payment.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { AccountComponent } from './patient/account/account.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { ScoletteComponent } from './scolette/scolette.component';
import { RelativeTimePipe } from './relative-time-pipe/relative-time-pipe';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { OneDoctorComponent } from './one-doctor/one-doctor.component';
import { RevieComponent } from './revie/revie.component';
import { LoginDoctorComponent } from './doctor/login-doctor/login-doctor.component';
import { DashboardDoctorComponent } from './doctor/dashboard-doctor/dashboard-doctor.component';
import { CloseConsultationComponent } from './consultation/close-consultation/close-consultation.component';
import { DeclinedConsultationComponent } from './consultation/declined-consultation/declined-consultation.component';
import { CompletedConsultationComponent } from './consultation/completed-consultation/completed-consultation.component';
import { PendingConsultationComponent } from './consultation/pending-consultation/pending-consultation.component';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { DoctorInformationComponent } from './doctor/doctor-information/doctor-information.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { NoteComponent } from './note/note.component';
import { CreatePrescriptionComponent } from './doctor/prescription/create-prescription.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { ConnectedDoctorProfileComponent } from './doctor/connected-doctor-profile/connected-doctor-profile.component';
import { ProgressComponent } from './doctor/progress/progress.component';
import { HippoNavBarComponent } from './hippo-med/hippo-nav-bar/hippo-nav-bar.component';
import { HippoFooterComponent } from './hippo-med/hippo-footer/hippo-footer.component';
import { HippoTopBarComponent } from './hippo-med/hippo-top-bar/hippo-top-bar.component';
import { HippoMedComponent } from './hippo-med/hippo-med.component';
import { HippoHeadComponent } from './hippo-med/hippo-head/hippo-head.component';
import { HippoHeroComponent } from './hippo-med/hippo-hero/hippo-hero.component';
import { HippoWhyComponent } from './hippo-med/hippo-why/hippo-why.component';
import { HippoAboutComponent } from './hippo-med/hippo-about/hippo-about.component';
import { HippoCountComponent } from './hippo-med/hippo-count/hippo-count.component';
import { HippoServiceComponent } from './hippo-med/hippo-service/hippo-service.component';
import { HippoAppointmentComponent } from './hippo-med/hippo-appointment/hippo-appointment.component';
import { HippoDepartmentComponent } from './hippo-med/hippo-department/hippo-department.component';
import { HippoTeamComponent } from './hippo-med/hippo-team/hippo-team.component';
import { HippoTestimonialsComponent } from './hippo-med/hippo-testimonials/hippo-testimonials.component';
import { HippoGalleryComponent } from './hippo-med/hippo-gallery/hippo-gallery.component';
import { HippoContactComponent } from './hippo-med/hippo-contact/hippo-contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountUpModule } from 'ngx-countup';
import { BackToTopButtonComponent } from './hippo-med/back-to-top-button/back-to-top-button.component';
import { PatientSideBarComponent } from './patient/patient-side-bar/patient-side-bar.component';
import { DevisComponent } from './devis/devis.component';

@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        RegisterComponent,
        QuestionnaireComponent,
        LoginComponent,
        PaymentComponent,
        PrescriptionComponent,
        AccountComponent,
        AllPrescriptionsComponent,
        ScoletteComponent,
        RelativeTimePipe,
        DoctorProfileComponent,
        LogoutButtonComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        DoctorsComponent,
        OneDoctorComponent,
        RevieComponent,
        LoginDoctorComponent,
        DashboardDoctorComponent,
        CloseConsultationComponent,
        DeclinedConsultationComponent,
        CompletedConsultationComponent,
        PendingConsultationComponent,
        RegisterDoctorComponent,
        DoctorInformationComponent,
        PatientCardComponent,
        NoteComponent,
        CreatePrescriptionComponent,
        CloseConsultationComponent,
        EditDoctorComponent,
        ConnectedDoctorProfileComponent,
        ProgressComponent,
        HippoNavBarComponent,
        HippoFooterComponent,
        HippoTopBarComponent,
        HippoMedComponent,
        HippoHeadComponent,
        HippoHeroComponent,
        HippoWhyComponent,
        HippoAboutComponent,
        HippoCountComponent,
        HippoServiceComponent,
        HippoAppointmentComponent,
        HippoDepartmentComponent,
        HippoTeamComponent,
        HippoTestimonialsComponent,
        HippoGalleryComponent,
        HippoContactComponent,
        BackToTopButtonComponent,
<<<<<<< HEAD
        PatientSideBarComponent,
        DevisComponent
=======
>>>>>>> 9439906675e7974aac4c19b16cac69d597ef1b6f
        ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule ,
        FormsModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        QRCodeModule,
        NgbModule,
        FontAwesomeModule,
        CountUpModule,
        
        
        
    ]
})
export class AppModule { }
