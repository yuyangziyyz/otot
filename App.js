import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const StackNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Signup" component={SignupScreen} />
        <StackNavigator.Screen name="Signin" component={SigninScreen} />
        <StackNavigator.Screen name="Home" component={HomeScreen} />
    </StackNavigator.Navigator>
    </NavigationContainer>

  );
}

export default App;