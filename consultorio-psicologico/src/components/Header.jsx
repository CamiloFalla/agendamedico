import React, { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-purple-700 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-xl font-bold">
          <img src="/images/logo.png" alt="Logo" className="h-8 inline" /> Consultorio Psicológico
        </a>
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
          <li><a href="/" className="hover:underline block py-2">Inicio</a></li>
          <li><a href="/especialistas" className="hover:underline block py-2">Especialistas</a></li>
          {loggedInUser ? (
            <>
              {loggedInUser.userType === 'specialist' && (
                <li><a href="/agenda" className="hover:underline block py-2">Mi Agenda</a></li>
              )}
              {loggedInUser.userType === 'patient' && (
                <li><a href="/cita" className="hover:underline block py-2">Agendar Cita</a></li>
              )}
              <li><a href="/perfil" className="hover:underline block py-2">Perfil</a></li>
              <li>
                <button onClick={handleLogout} className="hover:underline block py-2">
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li><a href="/login" className="hover:underline block py-2">Iniciar Sesión</a></li>
              <li><a href="/registro" className="hover:underline block py-2">Registrarse</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
