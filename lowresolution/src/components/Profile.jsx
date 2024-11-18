import React from 'react';

function Profile({ user }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Correo Electrónico:</strong> {user.email}</p>
      <p><strong>Tipo de Usuario:</strong> {user.userType === 'patient' ? 'Paciente' : 'Especialista'}</p>
      {/* Aquí puedes agregar más información y opciones de edición */}
    </div>
  );
}

export default Profile;
