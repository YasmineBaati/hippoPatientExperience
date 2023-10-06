import { Doctor } from "src/app/doctor/doctor";
import { Patient } from "../patient";
import { Medicine } from "./medicine";

export interface Prescription {
    id: number;
    createdAt:Date;
    updatedAt:Date;
    patient: Patient;
    doctor: Doctor;
    medicines: Medicine[];
    
    
}