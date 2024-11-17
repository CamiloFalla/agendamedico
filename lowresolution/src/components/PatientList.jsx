// src/components/PatientList.jsx
import React, { useState, useEffect } from 'react';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/patients')
      .then((response) => response.json())
      .then(setPatients);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Pacientes</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} className="mb-2">
            {patient.name} - {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
