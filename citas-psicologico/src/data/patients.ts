// Definición del tipo para un paciente
export interface Patient {
    id: number;
    name: string;
    email: string;
    password: string;
    userType: 'patient'; // Valor fijo para indicar que es un paciente
  }
  
  // Lista de pacientes precargados
  const patients: Patient[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      userType: 'patient',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'password123',
      userType: 'patient',
    },
  ];
  
  export default patients;
  