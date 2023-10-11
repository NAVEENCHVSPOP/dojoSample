/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {startSetupFlow} from '@dojo-engineering/react-native-pay-sdk';

const App = () => {
  const handleCheckout = () => {
    startSetupFlow({
      intentId: 'si_sandbox_6ZslI6tkLkWbubqlASahEw',
    }).then(res => {
      Alert.alert(`Result: ` + res);
      console.log(`Result: ` + res);
    });
  };

  return (
    <View style={styles.mainViewStyle}>
      <TouchableOpacity style={styles.btnViewStyle} onPress={handleCheckout}>
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
