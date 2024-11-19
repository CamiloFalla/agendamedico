import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Consultorio Psicológico. Todos los derechos reservados.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition duration-200"
          onClick={() => window.open('https://forms.google.com/su-google-form-url', '_blank')}
        >
          Calificar Aplicación
        </button>
      </div>
    </footer>
  );
};

export default Footer;
