import React from 'react'
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const DateComponent = ({translateXHour, translateX, translateXT}) => {

  return (
    <View style={todoStyles.todoCon}>
      <Animated.Text
        style={{...todoStyles.title, transform: [{translateX: translateXT}]}}>
        Due Date
      </Animated.Text>
      <Animated.View
        style={{
          ...todoStyles.todoInput,
          transform: [{translateX: translateX}],
        }}>
        <TextInput
          style={todoStyles.inputS}
          editableds
          multiline
          placeholder="thu, october 11, 2021"
          numberOfLines={1}
          placeholderTextColor={'white'}
          //   value={text}
          //   onChangeText={val => setText(val)}
        />
        <TouchableOpacity style={todoStyles.button}>
          <Text style={todoStyles.textBuitton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={todoStyles.button}>
          <Text style={todoStyles.textBuitton}>+</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          ...todoStyles.todoInput,
          transform: [{translateX: translateXHour}],
        }}>
        <TextInput
          style={todoStyles.inputS}
          editableds
          multiline
          placeholder="12:00 PM"
          numberOfLines={1}
          placeholderTextColor={'white'}
          //   value={text}
          //   onChangeText={val => setText(val)}
        />
        <TouchableOpacity style={todoStyles.button}>
          <Text style={todoStyles.textBuitton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={todoStyles.button}>
          <Text style={todoStyles.textBuitton}>+</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const todoStyles = StyleSheet.create({
  todoCon: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: 150,
    zIndex: -1,
    // justifyContent: '',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
  },
  todoInput: {
    // backgroundColor: 'red',
    width: '100%',
    height: '27%',
    zIndex: -1,
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  inputS: {
    padding: 0,
    width: '70%',
    height: 40,
    borderBottomColor: '#83A2E2',
    borderBottomWidth: 1,
    color: 'white',
    margin: 0,
    fontSize: 16,
    textDecorationLine: 'none',
    color: 'white'
    
    // backgroundColor: 'red'
  },
  button: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  textBuitton: {
    textAlign: 'center',
    fontSize: 26,
    color: 'black',
    width: '100%',
    height: '100%',
    margin: 0,
    transform: [{translateY: -4}],
    // fontWeight: 'bold'
  },
  title: {
    width: '100%',
    marginLeft: 20,
    fontSize: 18,
    color: '#93F3F6',
    marginBottom: -10,
    fontFamily: 'ShadowsIntoLight-Regular',
  },
});