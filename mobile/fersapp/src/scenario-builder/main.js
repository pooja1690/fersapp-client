import React, {Component} from 'react';
import {
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Colors} from '../lib/Colors';
import TermsOfService from '../terms/main';

export const ScenarioBuilder = props => {
  return (
    <SafeAreaView style={styles.background}>
      <TextInput style={styles.textInput} placeholder="Name this scenario" />

      <TouchableOpacity style={[styles.primaryButton, styles.button]}>
        <Text style={styles.primaryButtonText}>Start Scenario</Text>
      </TouchableOpacity>
      <Text style={styles.noteJustify}>
        By clicking Start Scenario, you agree to FERS Calculator
        <Text
          onPress={() => props.renderTermsModal()}
          style={{color: Colors.homeGreen}}>
          {' '}
          Terms of Service{' '}
        </Text>
        and Privacy Policy.
        {'\n'} {'\n'}
        This application is for FERS retirement calculations only. It does not
        include Civil Service Retirement Act (CSRS) annuity information. Most
        new federal employees hired on or after January 1, 1987, are
        automatically covered under FERS.
        {'\n'} {'\n'}With FERS, your retirement comes from three sources: Social
        Security, a defined benefit plan (FERS), and the Thrift Savings Plan
        (TSP). FERS provides a lifetime annuity based on an employee’s length of
        service and average high-three years of salary.
      </Text>
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

const styles = StyleSheet.create({
  background: {
    height: '70%',
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 100,
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '600',
  },
  noteJustify: {
    fontSize: 13,
    color: Colors.lightGrey,
    textAlign: 'justify',
    width: '80%',
  },
  textInput: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: Colors.homeGreen,
    color: Colors.black,
    fontSize: 18,
  },
  button: {
    width: '50%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  primaryButton: {
    backgroundColor: Colors.homeGreen,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 18,
  },
});
