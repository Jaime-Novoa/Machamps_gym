import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const sedes = [
    { id: 1, nombre: 'Sede Norte', estado: 'Abierto' },
    { id: 2, nombre: 'Sede Centro', estado: 'Abierto' },
    { id: 3, nombre: 'Sede Sur', estado: 'Cerrado' }
];

export default function SedesScreen({ navigation }) {
    return (
        <LinearGradient colors={['#d56705', '#4a0b00']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </TouchableOpacity>

                <View style={styles.headerTitle}>
                    <Text style={styles.headerText}>SEDES</Text>
                </View>
            </View>

            <TextInput
                placeholder="Buscar sede..."
                style={styles.search}
            />

            <ScrollView>
                {sedes.map((sede) => (
                    <View key={sede.id} style={styles.card}>
                        <Image
                            source={{ uri: 'https://picsum.photos/100' }}
                            style={styles.img}
                        />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.nombre}>{sede.nombre}</Text>
                            <Text style={styles.estado}>{sede.estado}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('DetalleSede', { sede })}
                        >
                            <Text style={styles.btnText}>VER</Text>
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
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20
    },

    img: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight: 10
    },

    nombre: {
        color: '#fff',
        fontWeight: 'bold'
    },

    estado: {
        color: '#ccc'
    },

    btn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 15
    },

    btnText: {
        color: '#fff'
    }

});