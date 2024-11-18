import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">Iniciar Sesión</h1>
      <LoginForm />
    </div>
  );
}

export default Login;

