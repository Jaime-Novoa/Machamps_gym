import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/AuthContext';

export default function RegistroUsuario({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { recuperarPassword } = useContext(AuthContext);

  const handleRecuperar = () => {

    if (!usuario || !email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const resultado = recuperarPassword(usuario, email, password);

    if (!resultado.success) {
      Alert.alert("Error", resultado.message);
    } else {
      Alert.alert("Éxito", "Contraseña actualizada correctamente");
      navigation.navigate('Login');
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
          <Text style={styles.menuItemActive}>RECUPERACION DE CONTRASEÑA</Text>
          <View style={styles.lineaMenu}></View>
        </View>
      </View>

      {/* INPUT USUARIO */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#1d3744"
          style={styles.input}
          onChangeText={setUsuario}
        />
      </View>

      {/* INPUT EMAIL */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#1d3744"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>

      {/* INPUT PASSWORD */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nueva contraseña"
          placeholderTextColor="#1d3744"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />
      </View>

      {/* BOTON */}
      <TouchableOpacity onPress={handleRecuperar} style={styles.btnWrapper}>
        <LinearGradient
          colors={['#ff7a00', '#ffcc00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.btnAcceder}
        >
          <Text style={styles.btnText}>CONTINUAR</Text>
        </LinearGradient>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },

  logo: {
    width: 300,
    height: 260,
    marginBottom: 20,
  },

  menuTop: {
    alignItems: 'center',
    marginBottom: 30,
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

  lineaMenu: {
    width: 120,
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
    marginBottom: 20,
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