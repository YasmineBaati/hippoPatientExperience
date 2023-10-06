
export interface RegisterDoctor {
    id: number;
    firstName: string;
    lastName: string;
    proficiency: string;
    email: string;
    password: string;
    confirmPassword: string;
    createdAt:Date;
    updatedAt:Date;
}