import React, {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  View,
  PanResponder,
} from 'react-native';
import {ListComponent} from './Body/ListComponent';

export const BodyComponent = anims => {
  let yV = 0;

  const pan = useRef(new Animated.ValueXY()).current;
  const {
    translateY,
    buttonT,
    setButtonT,
    showButton,
    setShowButton,
    moveDown,
    translateX,
    translateXTitle,
    translateXHour,
  } = anims.anims;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      pan.extractOffset();
      if (!showButton) pan.setOffset({x: 0, y: 200});
      setButtonT(false);
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: (e, gestureState) => {
      let r = gestureState.dy;
      if (r < 0) {
        pan.flattenOffset();
        Animated.timing(pan.y, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setShowButton(true);
        translateY.setValue(0);
        translateX.setValue(450);
        translateXTitle.setValue(450);
        translateXHour.setValue(450);
      } else if (r > 200) {
        pan.flattenOffset();
        Animated.timing(pan.y, {
          toValue: 200,
          duration: 200,
          useNativeDriver: true,
        }).start();
        translateY.setValue(200);
        setShowButton(false);
        moveDown();
      } else {
        pan.flattenOffset();
        Animated.timing(pan.y, {
          toValue: 200,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <View
      style={{
        // backgroundColor: 'red',
        width: '100%',
        position: 'absolute',
        top: 350,
        height: '70%',
        zIndex: 1,
        // flex: 1,
      }}>
      {buttonT ? (
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            ...TaskStyles.Container,
            transform: [{translateY: translateY}],
          }}></Animated.View>
      ) : (
        <View
          // {...panResponder.panHandlers}
          style={{
            ...TaskStyles.Container,
            // transform: [{translateY: pan.y}],
          }}>
          <ListComponent />
        </View>
      )}
    </View>
  );
};

const TaskStyles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'relative',
    right: 0,
    top: 10,
    left: 0,
    zIndex: 0,
    overflow: 'hidden',
    padding: 10,
  },
  Touch: {
    width: '100%',
    height: '50%',
    position: 'relative',
    // zIndex: 1,
    backgroundColor: 'red',
  },
});
