import React, { useState, FormEvent } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  userType: "patient" | "specialist";
}

interface LoginFormProps {
  setLoggedInUser: (user: User | null) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setLoggedInUser }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const allUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = allUsers.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedInUser(user);
      setMessage("Inicio de sesión exitoso. Redirigiendo...");

      setTimeout(() => {
        window.location.href = "/perfil"; // Redirigir al perfil
      }, 1000);
    } else {
      setMessage("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        Iniciar Sesión
      </h2>
      {message && <p className="text-red-500 text-center mb-4">{message}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Correo Electrónico:
        </label>
        <input
          id="email"
          type="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Contraseña:
        </label>
        <input
          id="password"
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
