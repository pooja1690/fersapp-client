import {StyleSheet} from 'react-native';
import {Colors} from '../lib/Colors';

export const styles = StyleSheet.create({
  errorView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  errorText: {
    color: Colors.white,
  },
  signInView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 200,
  },
  textInput: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    color: Colors.white,
    fontSize: 18,
  },
  button: {
    width: '41%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  signInButton: {
    backgroundColor: Colors.white,
  },
  signInText: {
    color: Colors.homeGreen,
    fontSize: 18,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
  signUpText: {
    color: Colors.white,
    fontSize: 18,
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
