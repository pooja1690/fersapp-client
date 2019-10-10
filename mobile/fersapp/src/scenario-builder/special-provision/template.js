import React from 'react';
import {Text, TouchableOpacity, SafeAreaView, View} from 'react-native';
import {styles} from '../styles';

export const SpecialProvisionTemplate = props => {
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Special Provision</Text>
        <Text style={[styles.description]}>
          Are you covered under the Special Provision for Air Traffic
          Controllers, Firefighters, or Law Enforcement Officers?
        </Text>
        <View>
          {props.options.map(item => {
            return (
              <View key={item.key} style={styles.radioButtonContainer}>
                <Text style={{fontSize: 18}}>{item.value}</Text>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => props.optionChanged(item.key)}>
                  {props.optionSelected === item.key && (
                    <View style={styles.radioCheckedCircle} />
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
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
