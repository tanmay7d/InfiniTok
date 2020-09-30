import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Text, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import LogOutUser from '../src/network/logout';
import {clearAsyncStorage} from '../src/asyncStorage/asyncStorage';
import firebase from '../src/firebase/firebase';
import {uuid} from '../src/utility/constants/constants';
import {ShowUsers} from '../src/component/Show Users/showUsers';
import {Profile} from '../src/component/Profile/profile';

const Dashboard = ({navigation}) => {
  const [userDetail, setUserDetail] = useState({
    id: '',
    name: '',
  });

  const [allUsers, setAllUsers] = useState([]);
  const {name} = userDetail;

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
              },
            ]);
          }}></Icon>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    try {
      firebase
        .database()
        .ref('users')
        .on('value', (dataSnapshot) => {
          let users = [];
          let currentUser = {
            id: '',
            name: '',
          };
          dataSnapshot.forEach((child) => {
            //alert(child.val().name);
            if (uuid === child.val().uid) {
              currentUser.id = uuid;
              currentUser.name = child.val().firstName;
            } else {
              users.push({
                id: child.val().uid,
                name: child.val().firstName,
              });
            }
          });
          console.log(currentUser.name);
          setUserDetail(currentUser + 'is current user');
          setAllUsers(users);
        });
    } catch (error) {
      alert(error);
    }
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
    <View style={styles.container}>
      <FlatList
        alwaysBounceVertical={false}
        data={allUsers}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={<Profile name={name} />}
        renderItem={({item}) => <ShowUsers name={item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Dashboard;
