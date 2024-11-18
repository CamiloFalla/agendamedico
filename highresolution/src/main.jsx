import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import initializeApp from './App.jsx';

initializeApp(); // Ejecutar lógica de inicialización

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-purple-700">Bienvenido al Consultorio Psicológico</h1>
        <p>Esta es una prueba de experiencia del usuario.</p>
      </main>
      <Footer />
    </>
  );
}

// Renderiza la aplicación en el div con id "root"
ReactDOM.render(<App />, document.getElementById('root'));
