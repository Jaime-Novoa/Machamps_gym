import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function RegistroUsuario({ navigation }) {

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { register } = useContext(AuthContext);


    const handleRegister = () => {

        if (!usuario || !email || !password || !confirmPassword) {
            
            //Alert solo funciona en el telfono, en el navegador no se muestra
            Alert.alert("Error", "Todos los campos son obligatorios");
            
            //La siguiente linea muestar el mensaje en el navegador
            alert("Todos los campos son obligatorios");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden");

            //La siguiente linea muestar el mensaje en el navegador
            alert("Las contraseñas no coinciden")
            return;
        }

        const resultado = register(usuario, email, password);

        if (!resultado.success) {
            Alert.alert("Error", resultado.message);

            //La siguiente linea muestar el mensaje en el navegador
            alert(resultado.message)
        } else {
            Alert.alert("Éxito", "El usuario ha sido registrado correctamente");

            //La siguiente linea muestar el mensaje en el navegador
            alert("El usuario ha sido registrado correctamente")
        }
    };



    return (
        <ScrollView contentContainerStyle={styles.container}>


            <Image source={require('../assets/Logo.jpg')} style={{ width: 200, height: 200, alignContent: 'center', marginBottom: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ marginRight: 20 }}>Iniciar sesion</Text>
                </TouchableOpacity>
                <Text>Registrarse</Text>
            </View>

            <Text style={styles.titulo}>Usuario</Text>
            <TextInput placeholder="Ingrese usuario"
                style={styles.input}
                onChangeText={setUsuario} />

            <Text style={styles.titulo}>Contraseña</Text>
            <TextInput placeholder="Ingrese contraseña"
                style={styles.input}
                secureTextEntry
                onChangeText={setPassword} />

            <Text style={styles.titulo}>Confirmar Contraseña</Text>
            <TextInput placeholder="Confirme contraseña"
                style={styles.input}
                secureTextEntry
                onChangeText={setConfirmPassword} />

            <Text style={styles.titulo}>Correo electronico</Text>
            <TextInput placeholder="Ingrese correo"
                style={styles.input}
                onChangeText={setEmail} />

            <Button title="Registrarse" onPress={handleRegister}/>

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