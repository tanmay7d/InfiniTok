import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.jpg')} />
        <Text style={styles.logoText}>INFINITOK</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 40,
    color: '#1ABC9C',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  },
});
