import React from 'react';

interface User {
  name: string;
  email: string;
  userType: 'patient' | 'specialist';
}

const Profile: React.FC = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null') as User | null;

  if (!loggedInUser) {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold text-red-500">Debe iniciar sesión para ver su perfil.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">Perfil de Usuario</h1>
      <p><strong>Nombre:</strong> {loggedInUser.name}</p>
      <p><strong>Email:</strong> {loggedInUser.email}</p>
      <p>
        <strong>Tipo de Usuario:</strong>{' '}
        {loggedInUser.userType === 'patient' ? 'Paciente' : 'Especialista'}
      </p>
    </div>
  );
};

export default Profile;
