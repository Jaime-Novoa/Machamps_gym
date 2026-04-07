import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const entrenadores = [
  { id: 1, nombre: 'Carlos Ruiz' },
  { id: 2, nombre: 'Ana Torres' },
  { id: 3, nombre: 'Luis Pérez' }
];

export default function EntrenadoresScreen({ navigation }) {
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