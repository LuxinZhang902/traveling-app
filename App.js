import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      {/* Using SafeAreaView Under the react-native package - making the text inside */}
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
