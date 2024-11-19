import React, { useEffect, useState } from 'react';
import AppointmentList from '../components/AppointmenList';
import { getAppointments } from '../data/appointments'; // Asegúrate de importar correctamente
import { Appointment } from '../data/appointments';

const Profile: React.FC = () => {
  const [userType, setUserType] = useState<'patient' | 'specialist' | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]); // Especifica el tipo correctamente

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const { userType, email, id } = JSON.parse(loggedInUser);

      setUserType(userType);

      // Filtrar citas dependiendo del tipo de usuario
      const allAppointments = getAppointments();
      if (userType === 'patient') {
        const userAppointments = allAppointments.filter(
          (appt) => appt.patientEmail === email
        );
        setAppointments(userAppointments);
      } else if (userType === 'specialist') {
        const specialistAppointments = allAppointments.filter(
          (appt) => appt.specialistId === id
        );
        setAppointments(specialistAppointments);
      }
    }
  }, []);

  if (!userType) {
    return <p>Debe iniciar sesión para ver su perfil.</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">Perfil</h1>
      {appointments.length > 0 ? (
        <AppointmentList userType={userType} appointments={appointments} />
      ) : (
        <p className="text-gray-600">No tienes citas programadas.</p>
      )}
    </div>
  );
};

export default Profile;
