import React, { useState } from 'react';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para autenticar al usuario
    alert('Inicio de sesión exitoso');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Iniciar Sesión</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
