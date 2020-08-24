import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello There</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a9a9a9',
  },

  text: {
    color: 'dodgerblue',
    fontSize: 28,
  },
});
