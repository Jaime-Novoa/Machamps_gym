import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';


export default function DetalleScreen({ navigation }) {

  const { logout } = useContext(AuthContext);
  const handleLogout = () => { logout(); };
  const { usuario } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>

          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>PERFIL</Text>
          </View>
        </View>

        {/* Perfil */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.avatar}
          />

          <Text style={styles.nombre}>{usuario?.username}</Text>
          <Text style={styles.username}>{usuario?.email}</Text>
        </View>

        {/* Opciones */}
        <View style={styles.menu}>
          {renderItem("Settings", "settings-outline")}
          {renderItem("Billing details", "card-outline")}
          {renderItem("User management", "person-outline")}
        </View>

        <View style={styles.divider} />

        <View style={styles.menu}>
          {renderItem("Information", "information-circle-outline")}
          {renderItem("Log out", "log-out-outline", handleLogout)}
        </View>

      </View>
    </ScrollView>
  );
}

// 🔹 Item reutilizable
const renderItem = (texto, icono, onPress) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Ionicons name={icono} size={20} color="#fff" />
    </View>

    <Text style={styles.itemText}>{texto}</Text>

    <Ionicons name="chevron-forward" size={20} color="#fff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8B0000'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
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

  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },

  nombre: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  username: {
    color: '#ddd'
  },

  menu: {
    marginTop: 10
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },

  iconContainer: {
    backgroundColor: '#ff7f00',
    padding: 10,
    borderRadius: 20,
    marginRight: 10
  },

  itemText: {
    flex: 1,
    color: '#fff',
    fontSize: 16
  },

  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 15
  }
});