import { Patient } from "../patient";

export interface PatientInformation {
    id: number;
    age:number;
    gender: string;
    phoneNumber: string;
    createdAt:Date;
    updatedAt:Date;
    patient: Patient;
}