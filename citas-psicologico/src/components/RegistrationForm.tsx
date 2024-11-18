import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  userType: 'patient' | 'specialist';
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    userType: 'patient',
  });
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users: FormData[] = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u) => u.email === formData.email);

    if (existingUser) {
      setMessage('Este correo ya está registrado. Intente con otro.');
      return;
    }

    const newUser = { ...formData, id: users.length + 1 };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Registro exitoso. Ahora puede iniciar sesión.');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Registro de Usuario</h2>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Contraseña:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userType" className="block text-gray-700">Tipo de Usuario:</label>
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={(e) => setFormData({ ...formData, userType: e.target.value as 'patient' | 'specialist' })}
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
