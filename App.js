/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Card from './src/component/card';
import Counter from './src/component/counter';
import Button from './src/component/button';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <View style={styles.viewWrapper} >
            <ScrollView contentContainerStyle={styles.cardWrapper} horizontal >
              <Card bg='purple' />
              <Card />
              <Card bg='red' />
              <Card />
              <Card bg='yellow' />
              <Card />
              <Card bg='#ccc' />
            </ScrollView>
          </View>
          <Counter />
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRu-_g4Xu-5TGbHGL91BzkaMqfVx5xvttJmcs9z_STpXAc-zgt'}}  style={{ backgroundColor: 'yellow', width: 200, height:  200}}/>
          <Button content='Click Me' />
      </SafeAreaView>
    </>
  );
};

const styles= StyleSheet.create({
  viewWrapper: {
    height: '50%'
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    minWidth: '100%',
    // flexWrap: 'wrap'
  }
})

export default App;
