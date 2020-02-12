/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: props => <Text>Header</Text>,
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="red"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={({route}) => ({title: route.params.secret, header: () => <Text></Text>})}
              p
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
