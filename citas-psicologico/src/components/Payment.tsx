import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    const pendingAppointment = JSON.parse(localStorage.getItem('pendingAppointment') || '{}');
    if (pendingAppointment) {
      pendingAppointment.status = 'con_pago';
      localStorage.setItem('pendingAppointment', JSON.stringify(pendingAppointment));
    }
    alert('Pago realizado con éxito.');
    navigate(-1); // Regresa al formulario
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">Pagando por PSE</h1>
      <p className="mb-6 text-gray-700">Por favor, confirme el pago para finalizar el proceso de cita.</p>
      <button
        onClick={handlePayment}
        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition duration-200"
      >
        Confirmar Pago
      </button>
    </div>
  );
};

export default Payment;

