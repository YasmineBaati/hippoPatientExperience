import { Prescription } from "../prescription/prescription";

export interface Medicine{
    id:number;
    medicineName:string;
    morning:number;
    afternoon:number;
    night:number;
    prescription:Prescription;
    createdAt:Date;
    updatedAt:Date;
}