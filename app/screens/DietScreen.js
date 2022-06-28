import { StyleSheet, View, Text } from 'react-native';


export default function DietScreen(){
    return(
        <View style={ styles.container }>
            <Text>Lista de Dietas</Text>
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