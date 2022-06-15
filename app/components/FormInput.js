import { View, TextInput, StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';

export default function FormInput({labelValue, placeholderText, ...rest}) {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                value={labelValue} 
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#555"
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        boderColor: '#ccc',
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});