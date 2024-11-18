import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Specialists from './pages/Specialists';
import Appointment from './pages/Appointment';
import Agenda from './pages/Agenda';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Specialists />} />
          <Route path="/cita/:id" element={<Appointment />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registration />} />
          {/* Ruta para manejar errores */}
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


