import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles';

export const SalaryInfoTemplate = props => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Salary Information</Text>
        <Text style={[styles.description]}>
          What do you estimate your annual salary will be when you retire?
        </Text>
        <TextInput
          style={styles.textInput}
          value={props.estimatedRetirementSalary}
          onChangeText={e => props.updateEstimatedRetirementSalary(e)}
          keyboardType="numeric"
          placeholder={'$'}
        />
        <View>
          <Text style={styles.description}>
            What do you estimate your “high three” salary will be when you
            retire?
          </Text>
          <TextInput
            value={props.estimatedRetirementHigh}
            style={styles.textInput}
            onChangeText={e => props.updateEstimatedRetirementHigh(e)}
            keyboardType="numeric"
            placeholder={'$'}
          />
        </View>
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
