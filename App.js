import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import Discover from './screens/Discover';
import ItemsScreen from './screens/ItemsScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      {/* Using SafeAreaView Under the react-native package - making the text inside */}
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
