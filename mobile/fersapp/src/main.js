import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Colors} from './lib/Colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScenarioBuilderContainer from './scenario-builder/name/container';
import RequiredDatesContainer from './scenario-builder/required-dates/container';
import SpecialProvisionContainer from './scenario-builder/special-provision/container';
import MilitaryServiceContainer from './scenario-builder/military-service/container';
import SalaryInfoContainer from './scenario-builder/salary-info/container';


class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.header}>
          <Image
            source={require('./assets/fers-logo.png')}
            style={{width: 20, height: 35}}
          />
          <View>
            <Text style={styles.headerTitle}>FERS</Text>
            <Text style={styles.headerTitle}>Calculator</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.newScenarioButton, styles.button]}
              onPress={() => navigate('ScenarioBuilder')}>
              <Text style={styles.newScenarioText}>Build a new Scenario</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.existingUserButton, styles.button]}>
              <Text style={styles.existingUserText}>
                Access existing Scenario's
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text styles={styles.termsConditions}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const MainNavigator = createStackNavigator(
  {
    Main: MainScreen,
    ScenarioBuilder: ScenarioBuilderContainer,
    RequiredDates: RequiredDatesContainer,
    SpecialProvision: SpecialProvisionContainer,
    MilitaryService: MilitaryServiceContainer,
    SalaryInfo: SalaryInfoContainer
  },
  {
    initialRouteName: 'Main',
  },
);
export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.homeGreen,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    paddingTop: 250,
    color: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '90%',
  },
  header: {
    padding: 5,
    width: 110,
    borderColor: Colors.white,
    marginLeft: 15,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 15,
  },
  actionButtons: {
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  termsConditions: {
    color: Colors.white,
  },
  button: {
    width: 250,
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 30,
  },
  newScenarioButton: {
    backgroundColor: Colors.white,
  },
  newScenarioText: {
    color: Colors.homeGreen,
    fontSize: 18,
  },
  existingUserButton: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
  existingUserText: {
    color: Colors.white,
    fontSize: 18,
  },
});
