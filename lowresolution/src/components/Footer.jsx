// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Consultorio Psicológico. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
