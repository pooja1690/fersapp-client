import React from 'react';
import {
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {Colors} from '../../lib/Colors';
import TermsOfService from '../../terms/main';
import {styles} from '../styles';

export const ScenarioBuilder = props => {
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={styles.questionContainer}>
        <View>
          <Text style={styles.title}>
            What is your anticipated retirement date?
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Scenario name"
            value={props.name}
            onChangeText={e => props.updateName(e)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.noteJustify, {marginTop: 20}]}>
            By clicking Start Scenario, you agree to FERS Calculator
            <Text
              style={{color: Colors.homeGreen}}
              onPress={() => props.renderTermsModal()}>
              {' '}
              Terms of Service{' '}
            </Text>
            and Privacy Policy.
            {'\n'} {'\n'}
            This application is for FERS retirement calculations only. It does
            not include Civil Service Retirement Act (CSRS) annuity information.
            Most new federal employees hired on or after January 1, 1987, are
            automatically covered under FERS.
            {'\n'} {'\n'}With FERS, your retirement comes from three sources:
            Social Security, a defined benefit plan (FERS), and the Thrift
            Savings Plan (TSP). FERS provides a lifetime annuity based on an
            employee’s length of service and average high-three years of salary.
          </Text>
        </View>
      </View>
      <View style={styles.submitContainer}>
        {props.name.length > 0 ? (
          <TouchableOpacity
            style={[styles.primaryButton, styles.button]}
            onPress={props.onComplete}>
            <Text style={styles.primaryButtonText}>Start Scenario</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.disabledPrimaryButton, styles.button]}
            disabled={true}>
            <Text style={styles.primaryButtonText}>Start Scenario</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        style={{
          width: '100%',
          alignSelf: 'center',
          height: 100,
          justifyContent: 'flex-end',
          backgroundColor: Colors.homeGreen,
        }}
        visible={props.showTermsModal}>
        <TermsOfService closeTermsModal={props.closeTermsModal} />
      </Modal>
    </SafeAreaView>
  );
};
