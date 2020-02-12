import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In Now</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {},
});
