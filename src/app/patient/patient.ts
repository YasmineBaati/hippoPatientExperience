import { PatientInformation } from "./information/patientInformation";

export interface Patient {
    id: number;
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string, // confirm password
    image: string,
    createdAt: Date,
    updatedAt: Date
    patientInformation: PatientInformation


}