// import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { StyleSheet, 
    Text,
    View,
    TextInput,
    TouchableOpacity 
    } from 'react-native';
import { useState } from 'react/cjs/react.production.min';

export default function RegistrationForm() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [isRegistrationSucess, setIsRegistrationSucess] = useState();

  return (
    <View style={styles.registrationForm}>
        <Text>Cadastro</Text>

        <Text>Username</Text>
        <TextInput style={styles.input}/>

        <Text>Email</Text>
        <TextInput style={styles.input}/>

        <Text>Senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />

        <Text>Confirme sua senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },

  input: {

  }
});
