import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, TouchableOpacity, NativeModules, View } from 'react-native'




export const BodyComponent = (anims) => {

  const {translateY} = anims.anims;
  return (
    <Animated.View
      style={{...TaskSTyles.Container, transform: [{translateY: translateY}]}}>
      <TouchableOpacity
        style={TaskSTyles.Touch}
        activeOpacity={0.1}></TouchableOpacity>
    </Animated.View>
  );
}

const TaskSTyles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    width: '100',
    height: '80%',
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
    height: '100%',
    position: 'relative',
    zIndex: 1,
  },
});
