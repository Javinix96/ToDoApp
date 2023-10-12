import React, {  useRef, useState} from 'react'
import {   Animated, StyleSheet, View, NativeModules, Text } from 'react-native'
import { HeaderComponent } from '../components/headerComponent'
import { BodyComponent } from '../components/bodyComponent'
import { TodoComponent } from '../components/todoComponent'
import { UserComponent } from '../components/userComponent'

export const MainPage  = () => {

  const [height,setHeight] = useState(50)

  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(410)).current;
  const translateXTitle = useRef(new Animated.Value(410)).current;
  const translateXHour = useRef(new Animated.Value(400)).current;

  const moveDown = () => {
    // translateX.setOffset(100);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 200,
        duration: 1500,
        useNativeDriver: true,
      }).start(),
      Animated.timing(translateXTitle, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        delay: 500,
      }).start(),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        delay: 800,
      }).start(),
      Animated.timing(translateXHour, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        delay: 1000,
      }).start(),
    ]);

  }

   const anims = {
     translateY,
     translateX,
     translateXTitle,
     height,
     moveDown,
     setHeight,
     translateXHour
   };


  return (
    <View style={styles.Main}>
      <UserComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.Title}>TO DO LIST</Text>
      </View>
      <TodoComponent anims={anims} />
      <BodyComponent anims={anims} />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#001B54',
    height: '100%',
    width: '100%',
    display: 'flex',
    overflow: 'visible'
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
    paddingTop: 20,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
