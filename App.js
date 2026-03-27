
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PerfilScreen from './screens/PerfilScreen';
import CarritoScreen from './screens/CarritoScreen';
import LoginScreen from './screens/LoginScreen';
import RegistroUsuario from './screens/RegistroUsuario';
import RecuperarContra from './screens/RecuperarContrasenia';

import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { StackScreen } from 'react-native-screens';

const Stack = createNativeStackNavigator();

// Control de navegación
function Rutas() {
  const { usuario } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {usuario ? (
        <>
          <Stack.Screen name="Inicio" component={HomeScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
          <Stack.Screen name="Carrito" component={CarritoScreen} />
         
        </>
      ) : (
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistroUsuario} />
        <Stack.Screen name = 'Cambiar Contraseña' component={RecuperarContra} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <NavigationContainer>
          <Rutas />
        </NavigationContainer>
      </CarritoProvider>
    </AuthProvider>
  );
}