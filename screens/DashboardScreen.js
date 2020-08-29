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
                onPress: () => {
                  Alert.alert('Logged Out Successfully', 'Thank You');
                },
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
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Dashboard;
