/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from "./AppNavigator"
export default class App extends Component {
  render() {
   

    return (
      <View style={styles.container}>
      <AppNavigator/>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
