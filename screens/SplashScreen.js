import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import {getAsyncStorage, keys} from '../src/asyncStorage/asyncStorage';
import {setUniqueValue} from '../src/utility/constants/constants';

const Splash = ({navigation}) => {
  useEffect(() => {
    const Redirect = setTimeout(() => {
      getAsyncStorage(keys.uuid)
        .then((uuid) => {
          if (uuid) {
            setUniqueValue(uuid);
            navigation.navigate('Dashboard');
          } else {
            navigation.navigate('Login');
          }
        })
        .catch((err) => {
          console.log(err);
          navigation.navigate('Login');
        });
    }, 3000);
    return () => clearTimeout(Redirect);
  });
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
