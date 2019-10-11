import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../lib/Colors';

export const FegliOptionsTemplate = props => {

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>FEGLI Options</Text>
        <Text style={[styles.description]}>
          Basic fegli life insurance option?
        </Text>
        <RNPickerSelect
          onValueChange={value => props.updateSurvivorBenefitOption(value)}
          value={props.survivorBenefitOption}
          style={{
            inputIOS: styles.textInput,
          }}
          placeholder={props.survivorBenefitOption}
          items={[
            {label: 'No reduction', value: 'none'},
            {label: '50% reduction', value: 'reduction50'},
            {label: '75% reduction', value: 'reduction75'},
          ]}
          Icon={() => {
            return (
              <View
                style={{
                  backgroundColor: 'transparent',
                  borderTopWidth: 10,
                  borderTopColor: Colors.darkGrey,
                  borderRightWidth: 10,
                  borderRightColor: 'transparent',
                  borderLeftWidth: 10,
                  borderLeftColor: 'transparent',
                  width: 0,
                  height: 0,
                  top: 15,
                  left: 10,
                }}
              />
            );
          }}
        />
        <Text style={styles.description}>
          What is your survivor benefit election?
        </Text>
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
