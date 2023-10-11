/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainViewStyle}>
      <TouchableOpacity style={styles.btnViewStyle}>
        <Text style={styles.txtStyle}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnViewStyle: {
    width: 120,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    color: 'white',
  },
});

export default App;
