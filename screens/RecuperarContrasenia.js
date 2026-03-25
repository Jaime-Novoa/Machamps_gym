import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function RegistroUsuario({ navigation }) {

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { recuperarPassword } = useContext(AuthContext);

    const handleRecuperar = () => {

        if (!usuario || !email || !password) {
            Alert.alert("Error", "Todos los campos son obligatorios");

            //La siguiente linea muestar el mensaje en el navegador
            alert("Todos los campos son obligatorios.")
            return;
        }

        const resultado = recuperarPassword(usuario, email, password);

        if (!resultado.success) {
            Alert.alert("Error", resultado.message);

            //La siguiente linea muestar el mensaje en el navegador
            alert(resultado.message)
        } else {
            Alert.alert("Éxito", "Contraseña actualizada correctamente");

            //La siguiente linea muestar el mensaje en el navegador
            alert("Contraseña actializada correctamente")
            navigation.navigate('Login');
        }
    };



    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image source={require('../assets/Logo.jpg')} style={{ width: 200, height: 200, alignContent: 'center', marginBottom: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ marginRight: 20 }}>Iniciar sesion</Text>
                </TouchableOpacity>
                <Text>Recuperar Contraseña</Text>
            </View>

            <Text style={styles.titulo}>Usuario</Text>
            <TextInput placeholder="Ingrese usuario"
                style={styles.input}
                onChangeText={setUsuario} />

            <Text style={styles.titulo}>Correo electronico</Text>
            <TextInput placeholder="Ingrese correo"
                style={styles.input}
                onChangeText={setEmail} />

            <Text style={styles.titulo}>Nueva contraseña</Text>
            <TextInput placeholder="Contraseña nueva"
                style={styles.input}
                secureTextEntry
                onChangeText={setPassword} />

            <Button title="Continuar" onPress={handleRecuperar} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }
});