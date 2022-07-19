import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import FormButton from '../components/FormButton';
import { windowHeight } from '../utils/Dimensions';
import { useState } from 'react';


export default function MealScreen(){
    const [item, setItem] = useState();
    const [grams, setGrams] = useState();
    const [meals, setMeals] = useState([]);

    function addItem(){ 
        setMeals();

    }

    return(
        <View style={ styles.container }>
            <Text>Tela de cadastro de refeições</Text>
            <View>
                <Text>{item}</Text>
                <Text>{grams}</Text>
                
            </View>
            <View style={ styles.inputContainer }>
                <TextInput style={ styles.input } onChangeText={item => setItem(item)} />
                <TextInput style={ styles.input } onChangeText={grams => setGrams(grams)} />
            </View>
            <TouchableOpacity onPress={() => addItem()}><Text>Pei</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setMeals([])}><Text>Reset</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 25,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    inputContainer: {
        flexDirection: "row",
    },

    input: {
       width: 80,
       height: 40,
       backgroundColor: "#fff",
       margin: 10
    }

  });