/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {
  startSetupFlow,
  startPaymentFlow,
} from '@dojo-engineering/react-native-pay-sdk';

const App = () => {
  const handleCheckout = () => {
    startSetupFlow({
      intentId: 'si_sandbox_ctAf6U4pNkqmMRx0UQ7W6w',
    }).then(res => {
      Alert.alert(`Setup intent result: ` + res);
      console.log(`Setup intent result: ` + res);
    });
  };

  const handlePaymentIntentPress = () => {
    startPaymentFlow({
      intentId: 'pi_sandbox_dcWwbxf6sUGU5yKe0MlZ5g',
      applePayMerchantId: 'merchant.com.derwentlondon.dl.sandbox',
    }).then(res => {
      Alert.alert(`Payment intent result: ` + res);
      console.log(`Payment intent result: ` + res);
    });
  };

  // function getAppleMerchantId() {
  //   let merchantId = `merchant.com.derwentlondon.dl.sandbox`;
  //   return merchantId;
  // }

  return (
    <View style={styles.mainViewStyle}>
      <TouchableOpacity style={styles.btnViewStyle} onPress={handleCheckout}>
        <Text style={styles.txtStyle}>Setup Flow</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnView2Style}
        onPress={handlePaymentIntentPress}>
        <Text style={styles.txtStyle}>Payment Flow</Text>
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
  btnView2Style: {
    marginTop: 20,
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
