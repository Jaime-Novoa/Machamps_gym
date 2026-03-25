import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { productos } from '../data/productos';
import ProductoItem from '../components/ProductoItem';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Productos</Text>

      {productos.length === 0 ? (
        <Text style={styles.vacio}>No hay productos disponibles</Text>
      ) : (
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <ProductoItem
              producto={item}
              onVer={() => navigation.navigate("Detalle", { producto: item })}
            />
          )}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  lista: {
    paddingBottom: 20
  },
  vacio: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16
  }
});