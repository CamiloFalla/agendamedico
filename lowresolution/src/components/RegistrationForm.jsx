import React, { useState } from 'react';

function RegistrationForm() {
  const [userType, setUserType] = useState('patient'); // 'patient' o 'specialist'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para registrar al usuario
    alert('Registro exitoso');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Registro de Usuario</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tipo de Usuario:</label>
        <select
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        >
          <option value="patient">Paciente</option>
          <option value="specialist">Especialista</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
      >
        Registrarse
      </button>
    </form>
  );
}

export default RegistrationForm;
