import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={{width: 350}}
        />
        <Text style={styles.logoText}>INFINITALK</Text>
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
    fontSize: 50,
    color: '#1ABC9C',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  },
});
