import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const PostItComponent = ({text}) => {
  return (
    <View style={style.container}>
      <Text style={{color: 'white'}}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '95%',
    height: 100,
    color: 'white',
    margin: 3,
    backgroundColor: '#DBB347',
    borderRadius: 10,
  },
});
