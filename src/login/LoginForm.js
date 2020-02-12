import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Input from '../login/Input';
import MyButton from '../login/MyButton';
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.signInText}> Sign In </Text>
        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button
          title="Sign in now"
          style={styles.button}
          navigate={this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    paddingVertical: 20,
    fontSize: 15,
    color: '#333',
  },
});
