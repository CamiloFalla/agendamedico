import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type User = {
  userType: 'specialist' | 'patient';
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(JSON.parse(user) as User);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-purple-700 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">
          <img src="/images/logo.png" alt="Logo" className="h-8 inline" /> Consultorio Psicológico
        </Link>
        <button
          className="md:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-4 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li><Link to="/" className="hover:underline block py-2">Inicio</Link></li>
          
          {loggedInUser ? (
            <>
              {loggedInUser.userType === 'specialist' && (
                <li><Link to="/agenda" className="hover:underline block py-2">Mi Agenda</Link></li>
              )}
              {loggedInUser.userType === 'patient' && (
                <li><Link to="/cita" className="hover:underline block py-2">Agendar Cita</Link></li>
              )}
              <li><Link to="/perfil" className="hover:underline block py-2">Perfil</Link></li>
              <li>
                <button onClick={handleLogout} className="hover:underline block py-2">
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:underline block py-2">Iniciar Sesión</Link></li>
              <li><Link to="/registro" className="hover:underline block py-2">Registrarse</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
