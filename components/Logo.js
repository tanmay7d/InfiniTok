import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginVertical: 10,
  },

  image: {
    marginTop: 10,
    height: 180,
    width: 230,
  },
});
