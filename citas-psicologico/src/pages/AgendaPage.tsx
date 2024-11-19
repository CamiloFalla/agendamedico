import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

type Appointment = {
  id: number;
  date: string;
  time: string;
  specialistName: string;
  patientName?: string;
  type: string;
  status: string;
};

const Agenda: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [userType, setUserType] = useState<'specialist' | 'patient' | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');

    if (loggedInUser) {
      setUserType(loggedInUser.userType);

      // Filtrar citas según el tipo de usuario
      const userAppointments = storedAppointments.filter((appt: Appointment) =>
        loggedInUser.userType === 'specialist'
          ? appt.specialistName === loggedInUser.name
          : appt.patientName === loggedInUser.name
      );
      setAppointments(userAppointments);
    }
  }, []);

  const renderTileContent = ({ date }: { date: Date }) => {
    const dayAppointments = appointments.filter(
      (appt) => appt.date === date.toISOString().split('T')[0]
    );

    if (dayAppointments.length > 0) {
      return (
        <div className="text-xs bg-purple-600 text-white p-1 rounded">
          {dayAppointments.length} cita(s)
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">
        {userType === 'specialist' ? 'Mi Agenda (Especialista)' : 'Mi Agenda (Paciente)'}
      </h1>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={renderTileContent}
      />
      {userType === 'patient' && (
        <div className="mt-4">
          <button
            onClick={() => navigate('/')}
            className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition"
          >
            Agendar Nueva Cita
          </button>
        </div>
      )}
    </div>
  );
};

export default Agenda;
