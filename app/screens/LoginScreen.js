import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { useState } from 'react';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebase";

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
            .then(value => {
                console.log('logado com sucesso!');
            })
            .catch(error => console.log(error));
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Logo-KILO.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>KILO APP</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Senha"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Entrar"
                onPress={() => login()}
            // onPress={() => alert('Botão Entrar foi clicado!')}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => alert('Leva para a tela de recuperação de senha.')}>
                <Text
                    style={styles.navButtonText}>
                    Esqueceu a Senha?
                </Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle="Entrar com o Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => { }}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate("signup")}>
                <Text
                    style={styles.navButtonText}>
                    Ainda não tem uma conta?
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9faf9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },

    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },

    navButton: {
        marginTop: 15
    },

    forgotButton: {
        marginVertical: 35
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular'
    }


});