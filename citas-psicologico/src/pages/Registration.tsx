import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Registration: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">Registro</h1>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
