import { Patient } from "src/app/patient/patient";
import { Doctor } from "../doctor";
import { Medicine } from "src/app/patient/prescription/medicine";


export interface Prescription {
    id: number;
    createdAt:Date;
    updatedAt:Date;
    patient: Patient;
    doctor: Doctor;
    medicines: Medicine[];
    
    
}