import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Input extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View>
        <TextInput
          {...this.props}
          placeholderTextColor="#ddd"
          style={styles.Input}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Input: {
    borderColor: '#f1f1f1',
    borderRadius: 4,
    height: 40,
    borderWidth: 2,
    paddingHorizontal: 5,
    color: '#999',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});
