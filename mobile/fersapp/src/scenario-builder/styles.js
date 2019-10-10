import {StyleSheet} from 'react-native';
import {Colors} from '../lib/Colors';

export const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    margin: '8%',
    justifyContent: 'space-between',
    width: '84%',
  },
  questionContainer: {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    margin: '8%',
    width: '84%',
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 20
  },
  noteJustify: {
    fontSize: 13,
    color: Colors.lightGrey,
    textAlign: 'justify',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.homeGreen,
    color: Colors.black,
    fontSize: 18,
    marginBottom: 30,
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
  disabledPrimaryButton: {
    backgroundColor: Colors.lightGrey,
  },
  submitContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    color: Colors.darkGrey,
    textAlign: 'justify',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCheckedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.homeGreen,
  },
});
