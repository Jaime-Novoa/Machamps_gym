import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/AuthContext';
import { ScrollView } from 'react-native';

export default function RegistroUsuario({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useContext(AuthContext);

  const handleRegister = () => {

    if (!usuario || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    const resultado = register(usuario, email, password);

    if (!resultado.success) {
      Alert.alert("Error", resultado.message);
    } else {
      Alert.alert("Éxito", "El usuario ha sido registrado correctamente");
      navigation.navigate('Login');
    }
  };

  return (
    <LinearGradient
      colors={['#d56705', '#4a0b00']}
      locations={[0, 0.7]}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>

        {/* LOGO */}
        <Image
          source={require('../assets/Logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* MENU */}
        <View style={styles.menuTop}>
          <Text
            style={styles.menuItemInactive}
            onPress={() => navigation.navigate('Login')}
          >
            INICIAR SESION
          </Text>

          <View style={styles.activeTab}>
            <Text style={styles.menuItemActive}>REGISTRARSE</Text>
            <View style={styles.lineaMenu}></View>
          </View>
        </View>

        {/* INPUTS */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Usuario"
            placeholderTextColor="#1d3744"
            style={styles.input}
            onChangeText={setUsuario}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#1d3744"
            style={styles.input}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#1d3744"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirmar contraseña"
            placeholderTextColor="#1d3744"
            secureTextEntry
            style={styles.input}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* BOTON */}
        <TouchableOpacity onPress={handleRegister} style={styles.btnWrapper}>
          <LinearGradient
            colors={['#ff7a00', '#ffcc00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btnAcceder}
          >
            <Text style={styles.btnText}>REGISTRARSE</Text>
          </LinearGradient>
        </TouchableOpacity>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 50,
  },

  logo: {
    width: 300,
    height: 260,
    marginBottom: 20,
  },

  menuTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginBottom: 30,
    alignItems: 'flex-end',
  },

  activeTab: {
    alignItems: 'center',
  },

  menuItemActive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  menuItemInactive: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    opacity: 0.5,
  },

  lineaMenu: {
    width: 100,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 6,
  },

  inputContainer: {
    width: 280,
    height: 50,
    backgroundColor: '#e6e6e6',
    borderRadius: 30,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 18,
  },

  input: {
    fontSize: 12,
    color: '#1d3744',
    letterSpacing: 1,
  },

  btnWrapper: {
    width: 280,
    marginTop: 10,
  },

  btnAcceder: {
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },

  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1.5,
  },
});