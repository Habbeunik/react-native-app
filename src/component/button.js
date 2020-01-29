import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onClick} >
      <View style={styles.button}>
        <Text style={styles.buttonText} >{props.content}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  }
});

export default Button;
