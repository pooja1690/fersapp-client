import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles';

export const AnnualUnusedLeaveTemplate = props => {

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Sick and Annual Leave</Text>
        <Text style={[styles.description]}>
          How many unused sick leave hours do you expect to have when you
          retire?
        </Text>
        <TextInput
          style={styles.textInput}
          value={`${props.unusedSickLeaveHours}`}
          onChangeText={e => props.updateAnnualSickUnusedLeave(e)}
          keyboardType="numeric"
          placeholder={'hours'}
        />
        <Text style={styles.description}>
          How many unused annual leave hours do you expect to have when you
          retire?
        </Text>
        <TextInput
          value={`${props.unusedAnnualLeaveHours}`}
          style={styles.textInput}
          onChangeText={e => props.updateAnnualUnusedLeave(e)}
          keyboardType="numeric"
          placeholder={'hours'}
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
