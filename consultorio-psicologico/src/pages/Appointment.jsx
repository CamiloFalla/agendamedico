import { useParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';

function Appointment() {
  const { id } = useParams();

  return (
    <div>
      <AppointmentForm specialistId={id} />
    </div>
  );
}

export default Appointment;
