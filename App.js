/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import NearbyScreen from './src/screens/NearbyScreen';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName = 'home'
              let iconType = 'SimpleLineIcons'
              if(route.name === 'Nearby') {
                iconName = 'location-searching'
                iconType = 'MaterialIcons'
              }
              if(route.name === 'Cart') {
                iconName = 'bag'
                // iconType = 'MaterialIcons'
              }
              if(route.name === 'Account') {
                iconName = 'user'
                iconType = 'AntDesign'
              }
              return <Icon type={iconType} name={iconName} style={{ fontSize: 17, color }} />
            }
          })}
            tabBarOptions={{
              inactiveTintColor: '#333',
              activeTintColor: '#fc4041',
            }}
          >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Nearby' component={NearbyScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Account' component={AccountScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
