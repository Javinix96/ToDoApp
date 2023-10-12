import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserComponent } from './userComponent';
import { TodoComponent } from './todoComponent';

export const HeaderComponent = ({height}) => {
  console.log(height);
  return (
    <View style={{...styles.container}}>
      {/* <UserComponent /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#34495D',
    width: '100%',
    height: '40%',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
  },
  Title: {
    color: 'white',
    fontFamily: 'ShadowsIntoLight-Regular',
    textAlign: 'center',
    height: 120,
    width: 300,
    // backgroundColor: 'red',
    fontSize: 65,
    margin: 0,
    lineHeight: 60,
    paddingTop: 20
  },
});
