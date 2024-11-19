import { Link } from 'react-router-dom';
import specialists from '../data/specialists';

const Specialists: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {specialists.map((specialist) => (
        <div key={specialist.id} className="bg-white shadow-md p-4 rounded">
          <img
            src={specialist.image}
            alt={specialist.name}
            className="w-24 h-24 rounded-full object-cover object-top mb-4"
          />
          <h2 className="text-xl font-semibold text-purple-700">
            {specialist.name}
          </h2>
          <p>{specialist.specialty}</p>
          <p>{specialist.description}</p>
          <Link
            to={`/cita/${specialist.id}`}
            className="mt-4 inline-block bg-purple-700 text-white py-2 px-4 rounded"
          >
            Agendar cita
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Specialists;

