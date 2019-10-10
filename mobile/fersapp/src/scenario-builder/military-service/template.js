import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles';
import {Colors} from '../../lib/Colors';

export const MilitaryServiceTemplate = props => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Military Service Credit</Text>
        <Text style={[styles.description]}>
          Have you served in the US Armed Forces and have bought back your
          service time? If so, enter that time.
        </Text>
        <View>
          <Text
            style={[styles.description, {color: Colors.black, marginTop: 10}]}>
            Years
          </Text>
          <TextInput
            style={styles.textInput}
            value={props.military_years}
            onChangeText={e => props.updateMilitaryServiceYears(e)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={[styles.description, {color: Colors.black}]}>
            Months
          </Text>
          <TextInput
            value={props.military_months}
            style={styles.textInput}
            onChangeText={e => props.updateMilitaryServiceMonths(e)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={[styles.description, {color: Colors.black}]}>Days</Text>
          <TextInput
            value={props.military_days}
            style={styles.textInput}
            onChangeText={e => props.updateMilitaryServiceDays(e)}
            keyboardType="numeric"
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
