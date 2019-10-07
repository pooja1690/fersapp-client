import fetch from 'cross-fetch';
import types from '../../types';
import {AsyncStorage} from 'react-native';

export const signingInUser = () => ({
  type: types.SIGNING_IN_USER,
});

export const signInUser = (email, pwd) => {
  return function(dispatch) {
    // dispatch(signingInUser());
    // return fetch(`https://ferscalculator.net/api/v1/sessions`)
    //   .then(
    //     response => response.json(),
    //     error => console.log('An error occurred.', error),
    //   )
    //   .then(json =>
    saveItem('jwt', 'abcde');
    dispatch(receivePosts(subreddit, json));
    //   );
  };
};

const saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('AsyncStorage Error: ' + error.message);
  }
};

export const signInSuccessful = () => ({
  type: types.SIGN_IN_SUCCESSFUL
});
