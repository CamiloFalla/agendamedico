import React, { useEffect, useState } from 'react';
import { getAppointments } from '../data/appointments.js';

function AppointmentList({ userType }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      const userAppointments = getAppointments().filter(
        (a) =>
          (userType === 'patient' && a.patientEmail === loggedInUser.email) ||
          (userType === 'specialist' && a.specialistId === loggedInUser.id)
      );
      setAppointments(userAppointments);
    }
  }, [userType]);

  if (appointments.length === 0) {
    return <p>No hay citas programadas.</p>;
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Fecha</th>
            <th className="py-2 px-4 border-b">Hora</th>
            <th className="py-2 px-4 border-b">{userType === 'specialist' ? 'Paciente' : 'Especialista'}</th>
            <th className="py-2 px-4 border-b">Tipo</th>
            <th className="py-2 px-4 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="py-2 px-4 border-b">{appointment.date}</td>
              <td className="py-2 px-4 border-b">{appointment.time}</td>
              <td className="py-2 px-4 border-b">
                {userType === 'specialist' ? appointment.patientName : appointment.specialistName}
              </td>
              <td className="py-2 px-4 border-b">{appointment.type}</td>
              <td className="py-2 px-4 border-b">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
