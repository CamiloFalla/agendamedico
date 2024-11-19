

  // Definición del tipo para una cita
export interface Appointment {
    id: number;
    date: string;
    time: string;
    patientName?: string; // Ahora puede ser opcional
    patientEmail: string;
    specialistName: string;
    specialistId: number;
    type: 'Presencial' | 'Virtual';
    status: 'Confirmada' | 'Pendiente' | 'Cancelada';
  }
  
  // Citas precargadas
  const appointments: Appointment[] = [
    {
      id: 1,
      date: '2024-11-10',
      time: '10:00',
      patientName: 'Juan Pérez',
      patientEmail: 'juan@example.com',
      specialistName: 'Dr. Carlos Martínez',
      specialistId: 1,
      type: 'Presencial',
      status: 'Confirmada',
    },
    {
        id: 2,
        patientName: 'María Gómez',
        patientEmail: 'maria@example.com',
        specialistId: 2,
        specialistName: 'Dra. Laura Gómez',
        date: '2024-12-05',
        time: '14:00',
        type: 'Virtual',
        status: 'Confirmada',
      },
      {
        id: 3,
        patientName: 'Camilo Falla',
        patientEmail: 'camiloafalla@gmail.com',
        specialistId: 3,
        specialistName: 'Dr. Miguel Torres',
        date: '2024-12-08',
        time: '10:00',
        type: 'Presencial',
        status: 'Confirmada',
      },
      {
        id: 4,
        patientName: 'Camilo Falla',
        patientEmail: 'camiloafalla@gmail.com',
        specialistId: 4,
        specialistName: 'Dr. Ana Sánchez',
        date: '2025-01-10',
        time: '10:00',
        type: 'Virtual',
        status: 'Confirmada',
      },
    // Agrega más citas aquí
  ];
  
  // Función para obtener citas
  export const getAppointments = (): Appointment[] => {
    const storedAppointments = localStorage.getItem('appointments');
    return storedAppointments ? JSON.parse(storedAppointments) : appointments;
  };
  
  // Exporta las citas iniciales para configuraciones iniciales
  export const initializeAppointments = () => {
    if (!localStorage.getItem('appointments')) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }
  };
  
  