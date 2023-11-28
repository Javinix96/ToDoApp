import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, TouchableOpacity, NativeModules, View, PanResponder } from 'react-native'

export const BodyComponent = (anims) => {

  let yV = 0;

  const pan = useRef(new Animated.ValueXY()).current;
  const {translateY, buttonT, setButtonT,showButton,setShowButton, moveDown,translateX,translateXTitle,translateXHour} = anims.anims;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      pan.extractOffset();
      if (!showButton)
        pan.setOffset({x:0,y:200});
      setButtonT(false);
    },
    onPanResponderMove:  Animated.event([
      null,
      { 
        dx: pan.x,
        dy: pan.y,
      },
    ],{useNativeDriver: false}),
    onPanResponderRelease: (e, gestureState) =>{
      let r =gestureState.dy;
      if (r < 0)
      {
        pan.flattenOffset()
        Animated.timing(pan.y, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true}).start();
          setShowButton(true);
          translateY.setValue(0);
          translateX.setValue(450);
          translateXTitle.setValue(450);
          translateXHour.setValue(450);
      }else if (r > 200)
      {
        pan.flattenOffset()
        Animated.timing(pan.y, {
          toValue: 200,
          duration: 200,
          useNativeDriver: true}).start();
          translateY.setValue(200);
          setShowButton(false);
          moveDown();
      }else
      {
        pan.flattenOffset()
        Animated.timing(pan.y, {
          toValue: 200,
          duration: 200,
          useNativeDriver: true}).start();
      }
    
    },
    
  });

  return (
    <>
    {
      buttonT ?
      <Animated.View
      { ...panResponder.panHandlers}
      style={{...TaskStyles.Container,
        transform: [ { translateY: translateY }]
      }}>
      {/* // style={[pan.getLayout(),TaskStyles.Container]}> */}
      {/* <TouchableOpacity
      style={TaskStyles.Touch}
    activeOpacity={0.1}></TouchableOpacity> */}
    </Animated.View> 
    : 
     <Animated.View
     { ...panResponder.panHandlers}
     style={{...TaskStyles.Container,
       transform: [ { translateY: pan.y }]
     }}>
     {/* // style={[pan.getLayout(),TaskStyles.Container]}> */}
     {/* <TouchableOpacity
     style={TaskStyles.Touch}
   activeOpacity={0.1}></TouchableOpacity> */}
   </Animated.View> 
  }
  </>
  );
}

const TaskStyles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    width: '100',
    height: '130%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    right:0,
    top: 300,
    left: 0,
    zIndex: 2,
  },
  Touch: {
    width: '100%',
    height: '50%',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'red'
  },
});
