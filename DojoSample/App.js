/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
  Platform,
} from 'react-native';
import {
  startSetupFlow,
  startPaymentFlow,
} from '@dojo-engineering/react-native-pay-sdk';

const App = () => {
  const [setupIntent, setSetupIntent] = React.useState('');
  const [paymentIntent, setPaymentIntent] = React.useState('');

  // function getAppleMerchantId() {
  //   let merchantId = `merchant.com.derwentlondon.dl.sandbox`;
  //   return merchantId;
  // }

  const onChangeSetupIntent = text => {
    console.log('setupIntent value:', text);
    setSetupIntent(text);
  };

  const handleSetupIntentBtnPress = () => {
    startSetupFlow({
      intentId: setupIntent,
    }).then(res => {
      Alert.alert(`Setup intent result: ` + res);
      console.log(`Setup intent result: ` + res);
    });
  };

  const onChangePaymentIntent = text => {
    console.log('paymentIntent value:', text);
    setPaymentIntent(text);
  };

  const handlePaymentIntentPress = () => {
    startPaymentFlow({
      intentId: paymentIntent,
      applePayMerchantId: 'merchant.com.derwentlondon.dl.sandbox',
    }).then(res => {
      Alert.alert(`Payment intent result: ` + res);
      console.log(`Payment intent result: ` + res);
    });
  };

  return (
    <View style={styles.mainViewStyle}>
      <TextInput
        style={styles.setupIntentTIStyle}
        onChangeText={text => onChangeSetupIntent(text)}
        value={setupIntent}
        placeholder="Setup intent"
      />
      <TouchableOpacity
        style={styles.setupIntentBtnViewStyle}
        onPress={handleSetupIntentBtnPress}>
        <Text style={styles.txtStyle}>Add card flow</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.paymentIntentTIStyle}
        onChangeText={text => onChangePaymentIntent(text)}
        value={paymentIntent}
        placeholder="Payment intent"
      />
      <TouchableOpacity
        style={styles.paymentIntentBtnViewStyle}
        onPress={handlePaymentIntentPress}>
        <Text style={styles.txtStyle}>
          {Platform.OS === 'ios' ? 'Apple pay flow' : 'Google pay flow'}
        </Text>
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
  setupIntentTIStyle: {
    paddingHorizontal: 10,
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  setupIntentBtnViewStyle: {
    marginTop: 10,
    width: 120,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentIntentTIStyle: {
    marginTop: 20,
    paddingHorizontal: 10,
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  paymentIntentBtnViewStyle: {
    marginTop: 10,
    width: 120,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    color: 'white',
  },
});

export default App;
