import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LogOutUser from '../src/network/logout';
import {clearAsyncStorage} from '../src/asyncStorage/asyncStorage';
import firebase from '../src/firebase/firebase';
import uuid from '../src/utility/constants/constants';

const Dashboard = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          type="material-community"
          name="logout"
          color="#fff"
          size={40}
          onPress={() => {
            Alert.alert('Logout', 'Are You Sure You Want To Logout?', [
              {
                text: 'Yes',
                onPress: () => logout(),
              },
              {
                text: 'No',
                //onPress: null,
              },
            ]);
          }}></Icon>
      ),
    });
  }, [navigation]);

  const logout = () => {
    LogOutUser()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            console.log('Logged Out Successfully and Cleared Async Storage');
            navigation.navigate('Login');
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Dashboard;
