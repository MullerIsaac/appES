import { StyleSheet, View, Text } from 'react-native';
import  { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import DietScreen from './DietScreen';
import MealScreen from './MealScreen';
import HistoryScreen from './HistoryScreen';

const dietIcon = <MaterialCommunityIcons name="book" color="#000" size={22} />;
const mealIcon = <MaterialCommunityIcons name="food-fork-drink" color="#000" size={22} />;
const historyIcon = <MaterialCommunityIcons name="clipboard-text-clock" color="#000" size={22} />;

const { Navigator, Screen } = createBottomTabNavigator();


export default function HomeScreen(){
    return(
        <Navigator>
            <Screen 
            name="diet" 
            component={DietScreen} 
            options={{ 
                tabBarLabel: "Dietas", 
                headerShown: false,
                tabBarIcon: () => (dietIcon)
            }}
            />

            <Screen 
            name="meal" 
            component={MealScreen} 
            options={{ 
                tabBarLabel: "Refeições", 
                headerShown: false, 
                tabBarIcon: () => (mealIcon)
            }}
            />

            <Screen 
            name="history" 
            component={HistoryScreen} 
            options={{ 
                tabBarLabel: "Histórico", 
                headerShown: false, 
                tabBarIcon: () => (historyIcon)
            }}
            />
        </Navigator>
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