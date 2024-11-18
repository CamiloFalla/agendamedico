import React, { useState, useEffect } from 'react';
import AppointmentList from './AppointmentList.jsx';
import appointmentsData from '../data/appointments.js';
import medicalHistoriesData from '../data/medicalHistories.js'; // Importar historiales médicos
import patientsData from '../data/patients.js';

function Profile() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState(null); // Estado para el historial médico

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(loggedInUser);

    if (loggedInUser) {
      if (loggedInUser.userType === 'specialist') {
        // Filtrar citas del especialista
        const specialistAppointments = appointmentsData.filter(
          (a) => a.specialistId === loggedInUser.id
        );
        setAppointments(specialistAppointments);
      } else if (loggedInUser.userType === 'patient') {
        // Filtrar citas del paciente
        const patientAppointments = appointmentsData.filter(
          (a) => a.patientEmail === loggedInUser.email
        );
        setAppointments(patientAppointments);

        // Cargar historial médico del paciente
        const patientMedicalHistory = medicalHistoriesData.find(
          (mh) => mh.patientEmail === loggedInUser.email
        );
        setMedicalHistory(patientMedicalHistory);
      }
    }
  }, []);

  if (!user) {
    return <p className="text-center">Cargando...</p>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Perfil de {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Tipo de Usuario:</strong> {user.userType === 'specialist' ? 'Especialista' : 'Paciente'}</p>

      {user.userType === 'specialist' && (
        <>
          <h3 className="text-xl font-semibold text-purple-700 mt-6">Mi Agenda</h3>
          <AppointmentList appointments={appointments} userType="specialist" />
        </>
      )}

      {user.userType === 'patient' && (
        <>
          <h3 className="text-xl font-semibold text-purple-700 mt-6">Mis Citas</h3>
          <AppointmentList appointments={appointments} userType="patient" />

          {medicalHistory && (
            <>
              <h3 className="text-xl font-semibold text-purple-700 mt-6">Historial Médico</h3>
              {medicalHistory.history.map((entry, index) => (
                <div key={index} className="mb-4">
                  <p><strong>Fecha:</strong> {entry.date}</p>
                  <p><strong>Especialista:</strong> {entry.specialistName}</p>
                  <p><strong>Notas:</strong> {entry.notes}</p>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Profile;
