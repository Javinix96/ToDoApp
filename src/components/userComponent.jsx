import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const UserComponent = () => {
  return (
    <View style={userStyles.Container}>
      <Text style={userStyles.userText}>
        {'javinix'.toUpperCase().slice(0, 7)}
      </Text>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={userStyles.userImage}
      />
    </View>
  );
};

const userStyles = StyleSheet.create({
  Container: {
    // backgroundColor: 'red',
    width: '100%',
    height: '6%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userText: {
    height: 'auto',
    color: 'white',
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  userImage: {
    width: 43,
    height: 43,
    marginRight: 5,
    borderRadius: 8,
  },
});
