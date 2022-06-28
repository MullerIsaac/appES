// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

// import RegistrationForm from './app/components/RegistrationForm';
// import FormButton from './app/components/FormButton';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import HomeScreen from './app/screens/HomeScreen';

const {Navigator, Screen, Group } = createNativeStackNavigator();


export default function App() {

  const [isSignedIn, setIsSignedIn] = useState(true);
  //let isSignedIn = true;

    const [loaded] = useFonts({
      "Kufam-SemiBoldItalic": require('./assets/fonts/Kufam-SemiBoldItalic.ttf'),
      "Lato-Bold": require('./assets/fonts/Lato-Bold.ttf'),
      "Lato-BoldItalic": require('./assets/fonts/Lato-BoldItalic.ttf'),
      "Lato-Italic": require('./assets/fonts/Lato-Italic.ttf'),
      "Lato-Regular": require('./assets/fonts/Lato-Regular.ttf')
    })

  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Navigator initialRouteName="login" screenOptions={{ headerShown: false}}>
        {isSignedIn ? (
          <>
          <Screen name="home" component={HomeScreen} options={{ title: "Home" }} />
          </>
        ) : (
          <>
          <Screen name="login" component={LoginScreen} options={{ title: "Login" }}  />
          <Screen name="signup" component={SignupScreen} options={{ title: "Sign up" }} />
          </>
        )}
        </Navigator>
    </NavigationContainer>
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
