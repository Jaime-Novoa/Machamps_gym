import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const manejarLogin = () => {
    const ok = login(email, password);

    if (!ok) {
      Alert.alert("Error", "Credenciales incorrectas");
      alert("Usuario o contraseña incorrectas.");
    }
  };

  return (
    <LinearGradient
      colors={['#d56705', '#4a0b00']}
      locations={[0, 0.7]}
      style={styles.container}
    >

      {/* LOGO */}
      <Image
        source={require('../assets/Logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* MENU */}
      <View style={styles.menuTop}>
        <View style={styles.activeTab}>
          <Text style={styles.menuItemActive}>INICIAR SESION</Text>
          <View style={styles.lineaMenu}></View>
        </View>

        <Text
          style={styles.menuItemInactive}
          onPress={() => navigation.navigate('Registro')}
        >
          REGISTRARSE
        </Text>
        
      </View>

      {/* INPUT USUARIO */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#1d3744"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>

      {/* INPUT CONTRASEÑA */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#1d3744"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />
      </View>

      {/* BOTON ACCEDER CON GRADIENTE */}
      <TouchableOpacity onPress={manejarLogin} style={styles.btnWrapper}>
        <LinearGradient
          colors={['#ff7a00', '#ffcc00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.btnAcceder}
        >
          <Text style={styles.btnText}>ACCEDER</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* OLVIDE CONTRASEÑA */}
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('Cambiar Contraseña')}
      >
        ¿Olvide mi contraseña?
      </Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },

  logo: {
    width: 280,
    height: 280,
    marginBottom: 10,
  },

  menuTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginBottom: 35,
    alignItems: 'flex-end',
  },

  activeTab: {
    alignItems: 'center',
  },

  menuItemActive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  menuItemInactive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    opacity: 0.5,
  },

  lineaMenu: {
    width: 60,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 6,
  },

  inputContainer: {
    width: 300,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 24,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 18,
  },

  input: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1d3744',
    letterSpacing: 0.8,
  },

  btnWrapper: {
    width: 300,
    marginTop: 10,
  },

  btnAcceder: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1,
  },

  forgotPassword: {
    marginTop: 22,
    color: '#fff',
    opacity: 0.6,
    fontSize: 12,
    letterSpacing: 0.8,
  },
});