import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';
import WelcomePage from './src/screens/WelcomePage';
import NewCandidate from './src/screens/NewCandidate';
import FlashMessage from "react-native-flash-message";
import CandidateList from './src/screens/CandidateList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <FlashMessage position="bottom" />
        <Stack.Navigator>
          <Stack.Screen name='Login Screen' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name='SignupPage' component={SignupPage} options={{ headerShown: false }} />
          <Stack.Screen name='NewCandidate' component={NewCandidate} options={{
            title: "Add Candidate",
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTitleStyle: {
              color: 'orange'
            }
          }} />
          <Stack.Screen name='WelcomePage' component={WelcomePage} options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTitleStyle: {
              color: 'orange'
            }
          }} />
          <Stack.Screen name='CandidateList' component={CandidateList} options={{
            title: "Candidate List",
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTitleStyle: {
              color: 'orange'
            }
          }} />
        </Stack.Navigator>
      </View>
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
