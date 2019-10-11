import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles';

export const TSPTemplate = props => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Thrift Savings Plan</Text>
        <Text style={[styles.description]}>
          How much do you anticipate withdrawing from your tsp each month during
          retirement?
        </Text>
        <TextInput
          style={styles.textInput}
          value={`${props.monthlyTspDisbursement}`}
          onChangeText={e => props.updateTspDisbursement(e)}
          keyboardType="numeric"
          placeholder={'$'}
        />
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={[styles.primaryButton, styles.button]}
          onPress={props.onComplete}>
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
