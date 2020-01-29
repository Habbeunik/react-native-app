import React from 'react';
import {  Text, View } from 'react-native'
import Button from './button';

export default class Counter extends React.Component {
  state = {
    count: 0
  }

  timer 

  handleReset = () => this.setState({ count: 0 })

  componentDidMount() {
    function generateRandomInteger() {
      return Math.round(Math.random()  * 10)
    }
    this.timer = setInterval(() => {
      const randomIncrease = generateRandomInteger();
      this.setState(prevState => ({ count: prevState.count + randomIncrease}))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
  return (
    <View>
      <Text>Counter: {this.state.count}</Text>
      <Button content='Reset Me' onClick={this.handleReset} />
    </View>
  )
  }
}