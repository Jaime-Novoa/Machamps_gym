import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetalleSedeScreen({ route, navigation }) {
  const { sede } = route.params;

  return (
    <LinearGradient colors={['#d56705', '#4a0b00']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>DETALLE SEDE</Text>
        </View>
      </View>

      {/* Usamos el nombre real de la BD */}
      <Text style={styles.title}>{sede.nombre}</Text>

      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.img}
      />

      {/* Muestra el aforo real traído desde Firebase */}
      <View style={styles.info}>
        <Text style={styles.label}>Aforo</Text>
        <Text style={styles.valor}>{sede.aforo} personas</Text>
      </View>

      {/* Muestra el horario real traído desde Firebase */}
      <View style={styles.info}>
        <Text style={styles.label}>Horario</Text>
        <Text style={styles.valor}>{sede.horario}</Text>
      </View>

      {/* Muestra las actividades de la lista unidas por un guion.
        Si por alguna razón viene vacío, muestra 'Ninguna' para que no falle.
      */}
      <View style={styles.info}>
        <Text style={styles.label}>Actividades</Text>
        <Text style={styles.valor}>
          {sede.actividades && sede.actividades.length > 0 
            ? sede.actividades.join(' - ') 
            : 'Ninguna'}
        </Text>
      </View>

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
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginVertical: 20
  },

  info: {
    marginVertical: 10,
    alignItems: 'center'
  },

  label: {
    color: '#fff',
    fontWeight: 'bold'
  },

  valor: {
    color: '#fff'
  }
});