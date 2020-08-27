import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';

import Logo from '../components/Logo';
import {TouchableOpacity} from 'react-native';
import {AddUser} from '../src/network/compile';
import {setAsyncStorage, keys} from '../src/asyncStorage/asyncStorage';
import {setUniqueValue} from '../src/utility/constants/constants';
import firebase from '../src/firebase/firebase';

const Signup = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    newUsername: '',
    password: '',
    email: '',
    verificationCode: '',
    newPassword: '',
    confirm,
  });
  const {
    newUsername,
    email,
    verificationCode,
    newPassword,
    confirm,
  } = credentials;
  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onLoginPress = () => {
    if (!newUsername) {
      Alert.alert('No Username Found', 'Please set username');
    } else if (!email) {
      Alert.alert('No Email Found', 'Please Enter Your Email Address');
    } else if (!newPassword) {
      Alert.alert('Message', 'Please Set A Password');
    } else if (!confirm) {
      Alert.alert('Confirmation Required', 'Please confirm your new password');
    } else if (newPassword !== confirm) {
      alert('Password Did Not Match. Please Retry');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, newPassword)
        .then(() => {
          console.log(firebase.auth().currentUser.uid);
          let uid = firebase.auth().currentUser.uid;
          let name = firebase.auth().currentUser.name;
          let profileImg = '';
          AddUser(name, email, uid, profileImg)
            .then(() => {
              console.log('createUserWithEmailAndPassword success');
              //setAsyncStorage(keys.uuid, uid);
              //setUniqueValue(uid);
              navigation.navigate('Dashboard');
            })
            .catch((err) => {
              alert(err);
              console.log("you've an error");
            });
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo text="Say Hello To Your App" />
      <TextInput
        style={styles.inputBox}
        placeholder="New Username"
        value={newUsername}
        placeholderTextColor="#696969"
        onChangeText={(text) => handleOnChange('newUsername', text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        value={email}
        keyboardType={'email-address'}
        placeholderTextColor="#696969"
        onChangeText={(text) => handleOnChange('email', text)}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder="New Password"
        value={newPassword}
        placeholderTextColor="#696969"
        onChangeText={(text) => handleOnChange('newPassword', text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder="Confirm Password"
        value={confirm}
        placeholderTextColor="#696969"
        onChangeText={(text) => handleOnChange('confirm', text)}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => onLoginPress()}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text style={{fontSize: 20}}>Already Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signButton}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  signup: {
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
