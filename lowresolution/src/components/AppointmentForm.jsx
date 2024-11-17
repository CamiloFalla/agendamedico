import React from 'react';

function AppointmentForm() {
  return (
    <form className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Agendar Cita</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Paciente:</label>
        <input
          type="text"
          name="patient"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha:</label>
        <input
          type="date"
          name="date"
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
