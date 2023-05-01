import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';  
import {auth} from './firebase/firebase.config'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login Screen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name='SignupPage' component={SignupPage} options={{ headerShown: false }}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
