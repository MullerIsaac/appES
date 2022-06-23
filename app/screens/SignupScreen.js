import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { useState } from 'react';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton'

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../config/firebase";

export default function SignupScreen() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('cadastrado com sucesso! \n' + value.user.uid);
        })
        .catch(error => console.log(error));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Crie sua Conta</Text>

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

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirme sua senha"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Criar Conta"
                onPress={() => createUser()}
            // onPress={() => alert('Botão criar conta foi clicado!')}
            />


            <SocialButton
                buttonTitle="Entrar com o Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => { }}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.colorTextPrivate}>Criando uma conta você concorda com nossos</Text>
                <TouchableOpacity onPress={() => alert('Termos de serviço clicado!')}>
                    <Text style={[styles.colorTextPrivate, { color: '#e88832' }]}>Termos de serviço </Text>
                </TouchableOpacity>
                <Text style={styles.colorTextPrivate}>e </Text>
                <TouchableOpacity onPress={() => alert('Política de privacidade clicada!')}>
                    <Text style={[styles.colorTextPrivate, { color: '#e88832' }]}>Política de Privacidade</Text>
                </TouchableOpacity>
            </View>
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

    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },

    navButton: {
        marginTop: 15
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular'
    },

    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },

    colorTextPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey'
    }


});