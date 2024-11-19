import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { Patient } from '../data/patients';
import { Specialist } from '../data/specialists';

type User = Patient | Specialist;

const Login: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">Iniciar Sesión</h1>
      <LoginForm setLoggedInUser={setLoggedInUser} />
      {loggedInUser && (
        <div className="mt-4 text-center">
          <p className="text-green-700">Bienvenido, {loggedInUser.name}!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
