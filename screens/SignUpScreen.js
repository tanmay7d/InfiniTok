import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import Logo from '../components/Logo';
import {TouchableOpacity} from 'react-native';
import {AddUser} from '../src/network/compile';
import firebase from '../src/firebase/firebase';
import {setAsyncStorage, keys} from '../src/asyncStorage/asyncStorage';
import {setUniqueValue} from '../src/utility/constants/constants';

const Signup = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm,
  });
  const {name, email, password, confirm} = credentials;
  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onLoginPress = () => {
    if (!name) {
      Alert.alert('Enter Name', 'Pleae enter your name');
    } else if (!email) {
      Alert.alert('No Email Found', 'Please Enter Your Email Address');
    } else if (!password) {
      Alert.alert('Message', 'Please Set A Password');
    } else if (!confirm) {
      Alert.alert('Confirmation Required', 'Please confirm your new password');
    } else if (password !== confirm) {
      alert('Password Did Not Match. Please Retry');
    } else {
      let firstName = name;
      let email_id = email;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setAsyncStorage(keys.uuid, firebase.auth().currentUser.uid);
          setUniqueValue(firebase.auth().currentUser.uid);
          console.log('Response user object : ', firebase.auth().currentUser);
          firebase
            .database()
            .ref('users/' + name)
            .set({
              firstName: firstName,
              email: email_id,
              uid: firebase.auth().currentUser.uid,
            });
          navigation.navigate('Dashboard');
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo text="Say Hello To Your App" />
      <TextInput
        style={styles.inputBox}
        placeholder="Name"
        value={name}
        placeholderTextColor="#696969"
        onChangeText={(text) => handleOnChange('name', text)}
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
        value={password}
        placeholderTextColor="#696969"
        onChangeText={(text) => handleOnChange('password', text)}
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
