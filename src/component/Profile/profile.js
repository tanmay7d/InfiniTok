import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Profile = ({name}) => (
  <View style={[styles.conatiner, {paddingVertical: 10}]}>
    <View style={styles.imgContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.img}></View>
      </TouchableOpacity>
      {/* console.log(name.charAt(0)); */}
      <Text style={styles.welcome}>{name.charAt(0)}</Text>
      <View style={[styles.conatiner, styles.editImgContainer]}>
        <FontAwesome5
          name="user-edit"
          size={20}
          //onPress={onEditImgTap}
          color="dodgerblue"
        />
      </View>
    </View>
    <Text style={{fontSize: 40, color: '#000'}}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  name: {
    fontSize: 50,
    color: '#fff',
  },
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    height: 154,
    width: 154,
    borderRadius: 77,
    borderWidth: 2,
    backgroundColor: '#a9a9a9',
    borderColor: 'dodgerblue',
  },
  // img: {
  //   height: 120,
  //   width: 120,
  //   borderRadius: 77,
  //   borderWidth: 2,
  //   borderColor: '#000',
  // },
  editImgContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  welcome: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
  },
});
