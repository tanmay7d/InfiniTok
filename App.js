import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/LoginScreen';
import Signup from './screens/SignUpScreen';
import Dashboard from './screens/DashboardScreen';
import Splash from './screens/SplashScreen';

const AuthStack = createStackNavigator();

const Navig = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#6A9FEC'},
        }}>
        <AuthStack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen
          name="Dashboard"
          component={Dashboard}
          headerLeft={true}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navig;
