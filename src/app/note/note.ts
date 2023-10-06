import { Consultation } from "../consultation/consultation";

export interface Note {
    id:number;
    newNote: string;
    consultation: Consultation;
    createdAt:Date;
    updatedAt:Date;
    
}