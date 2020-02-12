import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

const FeedScreen = props => {
  const [emailValue, setEmailValue] = React.useState('');
  const [nameValue, setNameValue] = React.useState('');
  const [usernameValue, setUsernameValue] = React.useState('');
  const [phoneValue, setPhoneValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  function handleSubmit() {
    Alert.alert(
      'Result',
      `My name is ${nameValue}, email is ${emailValue}, i have a username of ${usernameValue} and my phone number is ${phoneValue}, Password? Forget about it`,
    );
  }

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        padding: 25,
      }}>
      <Text onPress={props.goToLoginScreen}>Feed Screen</Text>
      <TextInput
        style={{...styles.textInput}}
        placeholder="Email"
        value={emailValue}
        onChangeText={setEmailValue}
        clearTextOnFocus
        keyboardAppearance='dark'
        placeholderTextColor='red'
        returnKeyType='search'
      />
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        value={nameValue}
        autoCapitalize='words'
        onChangeText={setNameValue}
        editable={false}
        placeholderTextColor='green'
      />
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={usernameValue}
        onChangeText={setUsernameValue}
        placeholderTextColor='blue'
      />
      <TextInput
        style={styles.textInput}
        placeholder="Phone"
        value={phoneValue}
        onChangeText={setPhoneValue}
        placeholderTextColor='black'
        keyboardType='phone-pad'
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={passwordValue}
        onChangeText={setPasswordValue}
        placeholderTextColor='grey'
        autoFocus
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10,
  },
});

export default FeedScreen;
