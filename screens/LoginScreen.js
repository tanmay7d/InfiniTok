import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Logo from '../components/Logo';
import {ScrollView} from 'react-native';
import setAsyncStorage, {keys} from '../src/asyncStorage/asyncStorage';
import firebase from '../src/firebase/firebase';
const Login = ({navigation}) => {
  console.ignoredYellowBox = ['Setting a timer'];
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = credentials;
  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onLoginPress = () => {
    if (!email) {
      Alert.alert('No Email Found', 'Please enter a valid email');
    } else if (!password) {
      Alert.alert('No Password Found', 'Please Enter Your Password');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log('User logged in successfully!');
          navigation.navigate('Dashboard');
        })
        .catch((err) => {
          Alert.alert(
            'Invalid Email or Password',
            'Please enter a valid email and correct Password',
          );
        });
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset="-50">
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Logo text="Say Hello To Your App" />
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            value={email}
            placeholderTextColor="#696969"
            onChangeText={(text) => handleOnChange('email', text)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputBox}
            placeholder="Password"
            value={password}
            placeholderTextColor="#696969"
            onChangeText={(text) => handleOnChange('password', text)}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => onLoginPress()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signup}>
            <Text style={{fontSize: 20}}>Don't Have An Account Yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signButton}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

export default Login;
