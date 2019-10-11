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

export const AdditionalOptionsTemplate = props => {
  console.log('EEEE', props);
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Additional Options</Text>
        <Text style={[styles.description]}>
          What is your current bi-weekly fehb deduction?
        </Text>
        <TextInput
          style={styles.textInput}
          value={`${props.survivorBenefitDeductions}`}
          onChangeText={e => props.updateSurvivorBenefitDeductions(e)}
          keyboardType="numeric"
          placeholder={'$'}
        />
        <Text style={styles.description}>
          What is your survivor benefit election?
        </Text>
        <RNPickerSelect
          onValueChange={value => props.updateSurvivorBenefitOption(value)}
          value={props.survivorBenefitOption}
          style={{
            inputIOS: styles.textInput,
          }}
          placeholder={props.survivorBenefitOption}
          items={[
            {label: 'None', value: 'none'},
            {label: '25% (reduced survivor benefit)', value: 'reduced'},
            {label: '50% (full survivor benefit)', value: 'full'},
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
