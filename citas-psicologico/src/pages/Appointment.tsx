import { useParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';

const Appointment: React.FC = () => {
  // Obtén el parámetro `id` de la URL
  const { id } = useParams<{ id: string }>();

  // Asegúrate de que `id` no sea undefined antes de usarlo
  if (!id) {
    return <p className="text-center text-red-500">ID del especialista no encontrado.</p>;
  }

  return (
    <div>
      <AppointmentForm specialistId={id} />
    </div>
  );
};

export default Appointment;
