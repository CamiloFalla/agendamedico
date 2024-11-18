import React, { useState, useEffect } from 'react';
import specialists from '../data/specialists.js';

function AppointmentForm({ specialistId }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: 'Presencial',
  });
  const [specialist, setSpecialist] = useState(null);

  useEffect(() => {
    // Verificar que specialistId sea válido
    console.log('Specialist ID recibido:', specialistId);
    const spec = specialists.find((s) => s.id === parseInt(specialistId, 10));
    if (spec) {
      setSpecialist(spec);
    } else {
      console.error('Especialista no encontrado');
    }
  }, [specialistId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
      alert('Debe iniciar sesión para agendar una cita.');
      return;
    }

    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const newAppointment = {
      id: storedAppointments.length + 1,
      patientName: loggedInUser.name,
      patientEmail: loggedInUser.email,
      specialistId: specialist.id,
      specialistName: specialist.name,
      date: formData.date,
      time: formData.time,
      type: formData.type,
      status: 'Pendiente',
    };

    storedAppointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(storedAppointments));
    alert('Cita agendada con éxito');
    window.location.href = '/perfil';
  };

  if (!specialist) {
    return <p className="text-center text-red-500">Especialista no encontrado.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        Agendar Cita con {specialist.name}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Fecha:</label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">Hora:</label>
          <input
            id="time"
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700">Tipo de Cita:</label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          >
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
        >
          Agendar
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;

