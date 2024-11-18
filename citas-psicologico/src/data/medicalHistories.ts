// Definición del tipo para una entrada en el historial médico
export interface MedicalHistoryEntry {
    date: string; // ISO format
    specialistName: string;
    notes: string;
  }
  
  // Definición del tipo para el historial médico de un paciente
  export interface PatientMedicalHistory {
    patientEmail: string;
    history: MedicalHistoryEntry[];
  }
  
  // Historiales médicos precargados
  const medicalHistories: PatientMedicalHistory[] = [
    {
      patientEmail: 'juan@example.com',
      history: [
        {
          date: '2024-10-10',
          specialistName: 'Dr. Carlos Martínez',
          notes: 'Paciente presentó mejoría significativa en síntomas de ansiedad.',
        },
        {
          date: '2024-11-15',
          specialistName: 'Dr. Carlos Martínez',
          notes: 'Se recomienda continuar con terapia cognitivo-conductual.',
        },
      ],
    },
    // Más historiales para otros pacientes
  ];
  
  export default medicalHistories;
  