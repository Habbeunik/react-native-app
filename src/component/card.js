import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, backgroundColor: props.bg}}>
      {
        props.children
      }
    </View>
  );
};

Card.defaultProps = {
  bg: 'black'
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 7,
    width: 200,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Card;
