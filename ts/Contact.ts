export interface Contact {
    id: string;
    firstname: string;
    lastname: string;
    dateOfBirth: string; // ISO
    email: string;
    phone: string;
  }
  
  export function calculateAge(dob: string): number {
    const birth = new Date(dob);
    const now = new Date();
    return now.getFullYear() - birth.getFullYear() -
      (now < new Date(now.getFullYear(), birth.getMonth(), birth.getDate()) ? 1 : 0);
  }
  