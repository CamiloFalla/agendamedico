// server.js
import express from 'express';
import cors from 'cors';
import { patients } from './src/data/patients.js'; // Asegúrate de tener el archivo y los datos correctos.

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Obtener todos los pacientes
app.get('/api/patients', (req, res) => {
  res.json(patients);
});

// Obtener paciente por ID
app.get('/api/patients/:id', (req, res) => {
  const patientId = parseInt(req.params.id, 10); // Asegúrate de convertir el parámetro a número.
  const patient = patients.find((p) => p.id === patientId); // Busca al paciente en los datos.
  if (patient) {
    res.json(patient); // Si se encuentra, responde con los datos del paciente.
  } else {
    res.status(404).send({ error: 'Paciente no encontrado' }); // Si no se encuentra, responde con un error 404.
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en http://localhost:${PORT}`);
});
