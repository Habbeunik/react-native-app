import React from 'react';
import {Text, Button, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './feedScreen';
import SearchScreen from './searchScreen';
import InboxScreen from './inboxScreen';
import NotificationScreen from './notificationScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = props => {
  function navigateToLoginScren() {
    props.navigation.navigate('Login', {
      secret: 'display me'
    })
  }

  function changeHeader() {
    props.navigation.setOptions({ title: 'Changed You!!'})
  }

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'red'}} >
      <Tab.Navigator >
        <Tab.Screen name='Feed' component={() => <FeedScreen goToLoginScreen={navigateToLoginScren}/>} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Inbox' component={InboxScreen} />
        <Tab.Screen name='Notification' component={NotificationScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
