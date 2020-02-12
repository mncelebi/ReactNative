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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Router from './src/Router';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;
