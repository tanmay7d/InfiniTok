import React from 'react';
import {StyleSheet, ScrollView, View, Text, TextInput} from 'react-native';

import Logo from '../components/Logo';
import {TouchableOpacity} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo text="Sign Up Now For Free" />
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          placeholderTextColor="#696969"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Last Name"
          placeholderTextColor="#696969"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email Address"
          placeholderTextColor="#696969"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Verification Code(Sent on Email)"
          placeholderTextColor="#696969"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Set Username"
          placeholderTextColor="#696969"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputBox}
          placeholder="Set New Password"
          placeholderTextColor="#696969"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputBox}
          placeholder="Confirm New Password"
          placeholderTextColor="#696969"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <Text style={{fontSize: 20}}>Already Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  signup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  signButton: {
    color: 'dodgerblue',
    fontSize: 20,
    fontStyle: 'italic',
  },
  inputBox: {
    marginVertical: 10,
    width: 300,
    backgroundColor: '#dcdcdc',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#110A39',
  },

  loginButton: {
    marginVertical: 10,
    width: 120,
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#110A39',
    alignItems: 'center',
  },

  loginText: {
    fontWeight: '500',
    fontSize: 20,
    color: 'dodgerblue',
    marginVertical: 10,
  },
});

export default Signup;
