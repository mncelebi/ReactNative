import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Veri from '../components/Veri';

export default class Search extends Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <Veri />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
