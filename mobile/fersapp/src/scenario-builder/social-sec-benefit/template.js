import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles';

export const SocialSecurityBenefitTemplate = props => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Social Security Benefit</Text>
        <Text style={[styles.description]}>
          What is your estimated monthly social security benefit at age 62?
        </Text>
        <TextInput
          style={styles.textInput}
          value={`${props.estimatedSSB}`}
          onChangeText={e => props.updateSocialSecBenefit(e)}
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
