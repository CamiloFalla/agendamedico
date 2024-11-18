import React, { useState } from 'react';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para agendar la cita
    alert('Cita agendada con éxito');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Agendar Cita</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Hora:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={(e) =>
            setFormData({ ...formData, time: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
      >
        Agendar
      </button>
    </form>
  );
}

export default AppointmentForm;

