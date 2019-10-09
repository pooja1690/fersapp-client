import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../lib/Colors';

class TermsOfService extends Component {
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <TouchableOpacity style={{left: '90%'}} onPress={() => this.props.closeTermsModal()}>
          <Text style={{fontSize: 30, color: Colors.white}}> X </Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Terms of Service</Text>
          <ScrollView>
            <Text style={styles.noteJustify}>
              By using the FERS Retirement Estimator, you acknowledge that you
              have read and agree to this Disclaimer. FERSHelp.com provides the
              FERS Retirement Estimator as a service to help the user explore
              retirement annuity estimates and compare different scenarios based
              on information that the user provides. The FERS Retirement
              Estimator only provides estimates and such estimates are not a
              guarantee of actual or real annuity totals. While FERSHelp.com
              does its best to ensure that computation formulas are accurate and
              up to date, errors in computation are possible. FERSHelp.com
              provides the FERS Retirement Estimator “as is”, and hereby
              disclaims all warranties and conditions, either express, or
              implied. In no event shall FERSHelp.com be liable for any damages,
              including consequential, incidental, indirect, direct, special,
              punitive or exemplary damages arising out of, or in any way
              related to, the use of the FERS Retirement Estimator. FERSHelp.com
              refers users to their agency’s retirement authority for actual
              annuity computations.
              {'\n'}{'\n'}
              By using the FERS Retirement Estimator, you acknowledge that you
              have read and agree to this Disclaimer. FERSHelp.com provides the
              FERS Retirement Estimator as a service to help the user explore
              retirement annuity estimates and compare different scenarios based
              on information that the user provides. The FERS Retirement
              Estimator only provides estimates and such estimates are not a
              guarantee of actual or real annuity totals. While FERSHelp.com
              does its best to ensure that computation formulas are accurate and
              up to date, errors in computation are possible. FERSHelp.com
              provides the FERS Retirement Estimator “as is”, and hereby
              disclaims all warranties and conditions, either express, or
              implied. In no event shall FERSHelp.com be liable for any damages,
              including consequential, incidental, indirect, direct, special,
              punitive or exemplary damages arising out of, or in any way
              related to, the use of the FERS Retirement Estimator. FERSHelp.com
              refers users to their agency’s retirement authority for actual
              annuity computations.
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default TermsOfService;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: Colors.homeGreen,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    color: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90%',
    padding: 20,
  },
  title: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: '600',
    paddingBottom: 10
  },
  noteJustify: {
    fontSize: 15,
    color: Colors.white,
    textAlign: 'justify',
  },
});
