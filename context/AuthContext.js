import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const BASE_URL = 'http://127.0.0.1:8080';


//Usuarios registrados
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // 1. INICIO DE SESIÓN (LOGIN)
  const login = async (email, password) => {
    try {
      const respuesta = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (respuesta.ok) {
        const usuarioLogueado = await respuesta.json();
        setUsuario(usuarioLogueado); // Guardamos el usuario en el estado global
        return true;
      } else if (respuesta.status === 401) {
        Alert.alert("Error", "Usuario o contraseña incorrectos.");
        return false;
      } else {
        Alert.alert("Error", "Problema en el servidor.");
        return false;
      }
    } catch (error) {
      console.error("Error de red en Login:", error);
      Alert.alert("Error de conexión", "No se pudo establecer contacto con el servidor.");
      return false;
    }
  };

  // 2. CERRAR SESIÓN (LOGOUT)
  const logout = () => {
    setUsuario(null);
  };

  // 3. REGISTRO DE USUARIOS (REGISTER)
  const register = async (username, email, password) => {
    try {
      const respuesta = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      if (respuesta.status === 201) {
        Alert.alert("Éxito", "Usuario registrado correctamente.");
        return { success: true };
      } else {
        const errorData = await respuesta.json().catch(() => ({}));
        return {
          success: false,
          message: errorData.message || "No se pudo registrar el usuario."
        };
      }
    } catch (error) {
      console.error("Error de red en Register:", error);
      return { success: false, message: "Error de red al conectar con el servidor." };
    }
  };

  // 4. RECUPERAR / CAMBIAR CONTRASEÑA (RECUPERAR PASSWORD)
  const recuperarPassword = async (username, email, nuevaPassword) => {
    try {
      // Nota: Tu Ktor maneja 'email' y 'password'. El username puede omitirse o agregarse en el JSON
      const respuesta = await fetch(`${BASE_URL}/auth/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: nuevaPassword // Mapeado al campo esperado por tu GymController.changePassword
        })
      });

      if (respuesta.ok) {
        Alert.alert("Éxito", "Contraseña restablecida con éxito.");
        return { success: true };
      } else if (respuesta.status === 404) {
        return { success: false, message: "El correo electrónico no coincide con ningún usuario activo." };
      } else {
        return { success: false, message: "Error interno al cambiar la contraseña." };
      }
    } catch (error) {
      console.error("Error de red en recuperarPassword:", error);
      return { success: false, message: "No hay conexión con el servidor de Machamp's Gym." };
    }
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, register, recuperarPassword }}>
      {children}
    </AuthContext.Provider>
  );
};