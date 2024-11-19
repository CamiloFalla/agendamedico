import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import specialists from '../data/specialists';

type Specialist = {
  id: number;
  name: string;
  specialty: string;
  email: string;
};

type AppointmentFormProps = {
  specialistId: string;
};

type FormData = {
  id: string; // ID único para la cita
  date: string;
  time: string;
  type: string;
  status: 'sin_pago' | 'con_pago';
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ specialistId }) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [specialist, setSpecialist] = useState<Specialist | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const spec = specialists.find((s) => s.id === parseInt(specialistId, 10));
    if (spec) {
      setSpecialist(spec);
    } else {
      console.error('Especialista no encontrado');
    }

    // Recupera una cita pendiente (staging) del localStorage si existe
    const pendingAppointment = localStorage.getItem('pendingAppointment');
    if (pendingAppointment) {
      setFormData(JSON.parse(pendingAppointment));
    } else {
      // Si no hay una cita pendiente, inicializa el formulario
      setFormData({
        id: Date.now().toString(), // Genera un ID único
        date: '',
        time: '',
        type: 'Presencial',
        status: 'sin_pago',
      });
    }
  }, [specialistId]);

  const handlePaymentRedirect = () => {
    if (!formData?.date || !formData.time) {
      alert('Por favor, complete todos los campos antes de proceder al pago.');
      return;
    }

    // Guarda la cita en localStorage antes de redirigir
    localStorage.setItem('pendingAppointment', JSON.stringify(formData));
    navigate('/pago'); // Redirige a la página de pago
  };

  const handleFinalize = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      alert('Debe iniciar sesión para finalizar la cita.');
      return;
    }

    const parsedUser = JSON.parse(loggedInUser);
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');

    if (!specialist || !formData) {
      alert('Error al procesar la cita.');
      return;
    }

    const newAppointment = {
      ...formData,
      patientName: parsedUser.name,
      patientEmail: parsedUser.email,
      specialistId: specialist.id,
      specialistName: specialist.name,
      status: 'Confirmada',
    };

    storedAppointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(storedAppointments));
    localStorage.removeItem('pendingAppointment'); // Limpia el staging
    alert('Cita confirmada con éxito');
    navigate('/perfil'); // Redirige al perfil
  };

  if (!specialist || !formData) {
    return <p className="text-center text-red-500">Cargando información...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        Agendar Cita con {specialist.name}
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">
            Fecha:
          </label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
            required
            disabled={formData.status === 'con_pago'}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">
            Hora:
          </label>
          <input
            id="time"
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
            required
            disabled={formData.status === 'con_pago'}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700">
            Tipo de Cita:
          </label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
            disabled={formData.status === 'con_pago'}
          >
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>
        {formData.status === 'sin_pago' ? (
          <button
            type="button"
            onClick={handlePaymentRedirect}
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition duration-200"
          >
            Pagar Cita
          </button>
        ) : (
          <button
            type="button"
            onClick={handleFinalize}
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
          >
            Finalizar Agenda de Cita
          </button>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
