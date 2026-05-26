import React, { useState, useEffect } from 'react'; // <-- Unificado e importados los hooks
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator // Para mostrar la animación de carga
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const BASE_URL = 'http://127.0.0.1:8080';

export default function EntrenadoresScreen({ navigation }) {
  // 1. Estados para almacenar los entrenadores y controlar la carga
  const [entrenadores, setEntrenadores] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. Función asincrónica para obtener los entrenadores desde Ktor
  const obtenerEntrenadores = async () => {
    try {
      const respuesta = await fetch(`${BASE_URL}/entrenadores`);
      if (respuesta.ok) {
        const datos = await respuesta.json();
        setEntrenadores(datos); // Guardamos la lista de la BD en el estado
      } else {
        console.error("Error al obtener los entrenadores del servidor");
      }
    } catch (error) {
      console.error("Error de red al conectar con el backend de entrenadores:", error);
    } finally {
      setCargando(false); // Apagamos el indicador de carga
    }
  };

  // 3. Hook para disparar la carga automáticamente al entrar a la pantalla
  useEffect(() => {
    obtenerEntrenadores();
  }, []);

  return (
    <LinearGradient colors={['#d56705', '#4a0b00']} style={{ flex: 1 }}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>ENTRENADORES</Text>
        </View>
      </View>

      <TextInput
        placeholder="Buscar..."
        style={styles.search}
      />

      {/* 4. Renderizado condicional: Ruedita de carga o la lista de la BD */}
      {cargando ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: '#fff', marginTop: 10 }}>Cargando entrenadores...</Text>
        </View>
      ) : (
        <ScrollView>
          {entrenadores.map((e) => (
            <View key={e.id} style={styles.card}>
              <Text style={styles.nombre}>{e.nombre}</Text>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>AGREGAR</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 10
  },

  headerTitle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff7f00',
    padding: 10,
    borderRadius: 20
  },

  headerText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  search: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20
  },

  nombre: {
    color: '#fff'
  },

  btn: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 10
  },

  btnText: {
    color: '#fff',
    fontSize: 12
  }
});