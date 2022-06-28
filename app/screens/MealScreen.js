import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import { useState } from 'react';


export default function MealScreen(){
    const [meals, setMeals] = useState([]);

    return(
        <View style={ styles.container }>
            <Text>Tela de cadastro de refeições</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 25,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
  });