import React, {Component} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const SignIn = props => {
  return (
    <View>
      {props.error != '' && (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>ERROR: {props.error}</Text>
        </View>
      )}
      <View style={styles.signInView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => props.emailChange(text)}
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          textContentType="password"
          onChangeText={text => props.passwordChange(text)}
          secureTextEntry={true}
        />
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.signInButton, styles.button]}
            onPress={props.onSubmit}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.signUpButton, styles.button]}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
