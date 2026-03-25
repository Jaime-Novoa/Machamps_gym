import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const manejarLogin = () => {
    const ok = login(email, password);

    if (!ok) {
      Alert.alert("Error", "Credenciales incorrectas");

      //La siguiente linea muestar el mensaje en el navegador
      alert("Usuario o contraseña incorrectas.")
    }
  };

  return (
    <View style={styles.container}>


      <Image source={require('../assets/Logo.jpg')} style={{width: 200, height: 200, alignContent: 'center', marginBottom: 20}}/>

      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 40}}>
        <Text>Iniciar Sesión</Text>
        <Text onPress={() => navigation.navigate('Registro')}>Regtistrarse</Text>
      </View>

      <Text style={styles.titulo}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Usuario (email)"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Button title="Acceder" onPress={manejarLogin} />
      <Text style={{textAlign: 'center', marginTop: 12}} 
      onPress={() => navigation.navigate('Cambiar Contraseña')}>Ovlidé mi Contraseña</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
});