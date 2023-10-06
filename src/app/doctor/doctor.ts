import { Consultation } from "../consultation/consultation";
import { Review } from "../review/review";
import { DoctorInformation } from "./doctor-information";

export interface Doctor {
    id: number;
    firstName:string;
    lastName: string;
    proficiency: string;
    price: number;
    email: string;
    password: string;
    confirm: string;
    image: string;
    createdAt:Date;
    updatedAt:Date;
    doctorConsultations: Consultation [];
    doctorReviews: Review[];

    doctorInformation: DoctorInformation
}