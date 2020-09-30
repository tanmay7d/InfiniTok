import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Left, Body, CardItem} from 'native-base';

export const ShowUsers = ({name, onImgTap, onNameTap}) => {
  return (
    <Card style={styles.cardStyle}>
      <CardItem style={styles.cardItemStyle}>
        <Left>
          <TouchableOpacity style={styles.logoContainer} onPress={onImgTap}>
            <Text style={styles.thumbnailName}>{name.charAt(0)}</Text>
          </TouchableOpacity>

          <Body>
            <Text style={styles.profileName} onPress={onNameTap}>
              {name}
            </Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#a9a9a9',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  cardItemStyle: {
    backgroundColor: '#a9a9a9',
  },
  logoContainer: {
    height: 60,
    width: 60,
    borderColor: '#a9a9a9',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  thumbnailName: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
