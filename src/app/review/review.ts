import { Doctor } from "../doctor/doctor";
import { Patient } from "../patient/patient";

export interface Review {
    id: number;
    comment: string;
    rate: number;
    createdAt:Date;
    updatedAt:Date;
    patient:Patient;
    doctor:Doctor
}
