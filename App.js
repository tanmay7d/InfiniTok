import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import GroupScreen from './pages/GroupScreen';
const AuthStack = createStackNavigator();

const Navig = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen
          name="Groups"
          component={GroupScreen}
          options={{
            title: 'Groups',
            headerTitleStyle: {
              color: 'dodgerblue',
            },
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navig;
