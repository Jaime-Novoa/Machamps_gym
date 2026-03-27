import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'
import { ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      {/* SCROLL */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <LinearGradient
          colors={['#d56705', '#4a0b00']}
          style={styles.container}
        >

          {/* HEADER */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#ff7a00', '#ffcc00']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.headerBox}
            >
              <Text style={styles.headerText}>MACHAMP'S GYM</Text>
            </LinearGradient>
          </View>

          {/* TITULO */}
          <Text style={styles.subtitulo}>Resumen de usuario</Text>

          {/* CARD */}
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={styles.card}
            />
          </View>

          {/* SEARCH */}
          <TextInput
            placeholder="Search....."
            placeholderTextColor="#555"
            style={styles.search}
          />

          {/* OPCIONES */}
          <View style={styles.options}>
            <View style={styles.option}>
              <Image source={{ uri: 'https://picsum.photos/100?1' }} style={styles.optionImg} />
              <Text style={styles.optionText}>Sedes</Text>
            </View>

            <View style={styles.option}>
              <Image source={{ uri: 'https://picsum.photos/100?2' }} style={styles.optionImg} />
              <Text style={styles.optionText}>Actividades</Text>
            </View>

            <View style={styles.option}>
              <Image source={{ uri: 'https://picsum.photos/100?3' }} style={styles.optionImg} />
              <Text style={styles.optionText}>Horario</Text>
            </View>
          </View>

        </LinearGradient>
      </ScrollView>

      {/* FOOTER (FUERA DEL SCROLL) */}
      <LinearGradient
        colors={['#ff0000', '#7a0000']}
        style={styles.footer}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <FontAwesome name="user" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Actividades')}>
          <FontAwesome name="list" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sedes')}>
          <FontAwesome name="users" size={24} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center'
  },

  header: {
    marginBottom: 20
  },

  headerBox: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff'
  },

  headerText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1
  },

  subtitulo: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '600'
  },

  cardContainer: {
    marginVertical: 20
  },

  card: {
    width: 180,
    height: 180,
    borderRadius: 25
  },

  search: {
    width: 300,
    height: 45,
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 25
  },

  options: {
    flexDirection: 'row',
    gap: 20
  },

  option: {
    alignItems: 'center'
  },

  optionImg: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginBottom: 5
  },

  optionText: {
    color: '#fff',
    fontSize: 12
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  footerIcon: {
    fontSize: 24,
    color: '#fff'
  }
});