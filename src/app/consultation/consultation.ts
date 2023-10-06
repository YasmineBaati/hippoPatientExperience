import { Doctor } from "../doctor/doctor";
import { Patient } from "../patient/patient";

export interface Consultation {
    id: number;
    status: string;
    startTime: Date;
    endTime: Date;
    concerns: string;
    diseases: string;
    previous: string;
    link:string;
    doctor: Doctor;
    patient: Patient;
    createdAt: Date;
    updatedAt: Date;
    
}