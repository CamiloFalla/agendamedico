// server.js
import express from 'express';
import cors from 'cors';
import { patients } from './src/data/patients.js';


const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/patients', (req, res) => {
  res.json(patients);
});

app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en http://localhost:${PORT}`);
});
