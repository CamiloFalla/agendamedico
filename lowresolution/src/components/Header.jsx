// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-purple-700 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="/">Consultorio Psicológico</a>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Inicio
            </a>
          </li>
          <li>
            <a href="/agenda" className="hover:underline">
              Agenda
            </a>
          </li>
          <li>
            <a href="/pacientes" className="hover:underline">
              Pacientes
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
