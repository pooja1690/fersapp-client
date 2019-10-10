import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  DatePickerIOS,
} from 'react-native';
import {Colors} from '../../lib/Colors';
import {styles} from '../styles';
import _ from 'lodash';
import DateTimePicker from '@react-native-community/datetimepicker';

export const RequiredDatesTemplate = props => {
  return (
      <SafeAreaView style={styles.background}>
        <View style={styles.questionContainer}>
          <Text style={styles.title}>Required dates</Text>
          <View>
            <Text style={styles.description}>What is your date of birth?</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TextInput
                style={styles.textInput}
                onFocus={props.test}
                value={props.dob ? props.dob : 'DD/MM/YYYY'}
                onChange={props.update}
              />
              <TouchableOpacity onPress={() => datePickerPressed('dob')}>
                <Image
                  source={require('../../assets/date-picker.png')}
                  style={{width: 35, height: 35}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.description}>
              What is your service computation date?
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name this scenario"
            />
          </View>
          <View>
            <Text style={styles.description}>
              What is your anticipated retirement date?
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name this scenario"
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

// const DatePicker = props => {
//   return (
//     <DateTimePicker
//       value={new Date()}
//       display="default"
//       onChange={props.newDate}
//     />
//   );
// };
