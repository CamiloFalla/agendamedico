
interface Specialist {
  id: number;
  name: string;
  image: string;
  specialty: string;
  description: string;
}

interface SpecialistCardProps {
  specialist: Specialist;
}

function SpecialistCard({ specialist }: SpecialistCardProps) {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <img
        src={specialist.image}
        alt={specialist.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{specialist.name}</h3>
      <p className="text-gray-700 mb-4">{specialist.specialty}</p>
      <p className="text-gray-500 text-sm mb-4">{specialist.description}</p>
      <a
        href={`/cita?specialistId=${specialist.id}`}
        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition duration-200 block text-center"
      >
        Agendar cita
      </a>
    </div>
  );
}

export default SpecialistCard;
