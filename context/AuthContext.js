import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);

  //Usuarios registrados
  const [usuarios, setUsuarios] = useState([
    { username: "admin", email: "admin@test.com", password: "1234" }
  ]);

  const login = (email, password) => {

    const user = usuarios.find(u => u.email === email && u.password === password);

    if (user) {
      setUsuario(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
  };

  const register = (username, email, password) => {

    const existe = usuarios.find(u => u.email === email && u.username === username);

    if (existe) {
      return { success: false, message: "El usuario ya se encuentra registrado. Inicie sesión o recupere su contraseña" };
    }

    const nuevoUsuario = { username, email, password };
    setUsuarios([...usuarios, nuevoUsuario]);

    return { success: true };
  };

  const recuperarPassword = (username, email, nuevaPassword) => {
    const index = usuarios.findIndex(
      u => u.username === username && u.email === email
    );

    if (index === -1) {
      return { success: false, message: "Usuario no encontrado" };
    }

    const nuevosUsuarios = [...usuarios];
    nuevosUsuarios[index].password = nuevaPassword;

    setUsuarios(nuevosUsuarios);

    return { success: true };
  };


  return (
    <AuthContext.Provider value={{ usuario, login, logout, register, recuperarPassword }}>
      {children}
    </AuthContext.Provider>
  );
};