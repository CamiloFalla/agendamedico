import React from 'react';

interface Appointment {
  id: number;
  date: string;
  time: string;
  type: string;
  status: string;
  patientEmail?: string;
  specialistEmail?: string;
}

interface User {
  email: string;
  userType: 'specialist' | 'patient';
}

function Agenda() {
  const loggedInUser: User | null = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  const appointments: Appointment[] = JSON.parse(localStorage.getItem('appointments') || '[]');

  if (!loggedInUser) {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold text-red-500">Debe iniciar sesión para ver su agenda.</h1>
      </div>
    );
  }

  const userAppointments = appointments.filter(
    (appointment) =>
      (loggedInUser.userType === 'specialist' && appointment.specialistEmail === loggedInUser.email) ||
      (loggedInUser.userType === 'patient' && appointment.patientEmail === loggedInUser.email)
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">Mi Agenda</h1>
      {userAppointments.length > 0 ? (
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Hora</th>
              <th className="py-2 px-4 border-b">Tipo</th>
              <th className="py-2 px-4 border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {userAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="py-2 px-4 border-b">{appointment.date}</td>
                <td className="py-2 px-4 border-b">{appointment.time}</td>
                <td className="py-2 px-4 border-b">{appointment.type}</td>
                <td className="py-2 px-4 border-b">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No tiene citas programadas.</p>
      )}
    </div>
  );
}

export default Agenda;
