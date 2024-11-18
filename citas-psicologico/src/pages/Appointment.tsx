import React from 'react';
import { useParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';

interface RouteParams {
  id: string;
}

function Appointment() {
  const { id } = useParams<RouteParams>();

  return (
    <div>
      <AppointmentForm specialistId={id} />
    </div>
  );
}

export default Appointment;
