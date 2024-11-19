import { Appointment } from '../data/appointments';

type AppointmentListProps = {
  appointments: Appointment[];
  userType: 'specialist' | 'patient';
};

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, userType }) => {
  if (appointments.length === 0) {
    return <p>No hay citas disponibles.</p>;
  }

  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>{userType === 'specialist' ? 'Paciente' : 'Especialista'}</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>
              {userType === 'specialist'
                ? appointment.patientName || "N/A"
                : appointment.specialistName || "N/A"}
            </td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentList;
