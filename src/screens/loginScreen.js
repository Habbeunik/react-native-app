import React from 'react';
import {Text, Button, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const SignUpScreen = () => <Text>Sign up screen i am</Text>
const ForgotPasswordScreen = () => <Text>Forgot Password up screen i am</Text>
const LoginScreeb = () => <Text>Login up screen i am</Text>

const LoginScreen = props => {
  function navigateToHomeScreen() {
    props.navigation.navigate('Home', {
      secret: ''
    });
  }

  console.log('login screen props.', props)

  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name='Signup' component={SignUpScreen} />
        <Drawer.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        <Drawer.Screen name='Login' component={LoginScreeb} />
      </Drawer.Navigator>
    </>
  );
};

export default LoginScreen;
