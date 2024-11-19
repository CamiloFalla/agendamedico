import { useState, useEffect } from 'react';
import AppointmentList from './AppointmenList';
import { getAppointments, Appointment } from '../data/appointments'; // Importa tipo y función
import { User } from '../data/types'; // Centraliza tipos compartidos

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null') as User;
    setUser(loggedInUser);

    if (loggedInUser) {
      const allAppointments = getAppointments();

      const userAppointments =
        loggedInUser.userType === 'specialist'
          ? allAppointments.filter((a) => a.specialistId === loggedInUser.id)
          : allAppointments.filter((a) => a.patientEmail === loggedInUser.email);

      setAppointments(userAppointments);
    }
  }, []);

  if (!user) {
    return <p className="text-center">Cargando...</p>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Perfil de {user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Tipo de Usuario:</strong> {user.userType === 'specialist' ? 'Especialista' : 'Paciente'}
      </p>

      <h3 className="text-xl font-semibold text-purple-700 mt-6">
        {user.userType === 'specialist' ? 'Mi Agenda' : 'Mis Citas'}
      </h3>
      <AppointmentList appointments={appointments} userType={user.userType} />
    </div>
  );
}

export default Profile;
