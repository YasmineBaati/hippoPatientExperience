import { Doctor } from "./doctor";

export interface DoctorInformation {
    id: number;
    price: number;
    phoneNumber: number;
    startTime: Date;
    endTime: Date;
    doctor: Doctor;
    createdAt:Date;
    updatedAt: Date;
}