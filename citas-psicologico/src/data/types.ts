// src/data/types.ts
export interface UserBase {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  
  export interface Patient extends UserBase {
    userType: 'patient';
  }
  
  export interface Specialist extends UserBase {
    userType: 'specialist';
    specialty: string;
    image: string;
    description: string;
  }
  
  export type User = Patient | Specialist;
  