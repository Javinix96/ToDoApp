import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ButttonMoreComponent} from './ButtonMoreComponent';
import {DateComponent} from './DateComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export const TodoComponent = ({anims}) => {
  const [text, setText] = useState('');

  const {
    height,
    moveDown,
    translateXHour,
    translateX,
    translateXTitle,
    showButton,
    setShowButton,
    focus,
    setFocus,
  } = anims;

  return (
    <View style={{...todoStyles.todoCon, height: height}}>
      <View
        style={{
          ...todoStyles.todoInput,
          height: focus === true ? '300%' : '100%',
        }}>
        <TextInput
          style={{
            ...todoStyles.inputS,
            backgroundColor: !focus ? '#001B54' : '#201B64',
          }}
          multiline
          numberOfLines={10}
          enablesReturnKeyAutomatically
          value={text}
          textAlignVertical="top"
          onPressIn={e => {
            setFocus(true);
            console.log(focus);
          }}
          onChangeText={val => setText(val)}
        />

        <TouchableOpacity style={todoStyles.button}>
          <Text style={todoStyles.textButton}>
            <Icon name="add-circle" color="white" size={42} />
          </Text>
        </TouchableOpacity>
      </View>
      {/* View para boton o date */}
      {showButton ? (
        <ButttonMoreComponent moveDown={moveDown} setButton={setShowButton} />
      ) : (
        <DateComponent
          translateX={translateX}
          translateXT={translateXTitle}
          translateXHour={translateXHour}
        />
      )}
      {/* <DateComponent /> */}
    </View>
  );
};

const todoStyles = StyleSheet.create({
  todoCon: {
    // backgroundColor: 'red',
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 200,
    zIndex: 20,
    alignItems: 'center',
  },
  todoInput: {
    // backgroundColor: 'black',
    width: '100%',
    height: '100%',
    zIndex: -1,
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    zIndex: 3,
  },
  inputS: {
    padding: 0,
    width: '70%',
    height: '80%',
    borderBottomColor: '#83A2E2',
    borderBottomWidth: 1,
    color: 'white',
    margin: 0,
    fontSize: 16,
    textDecorationLine: 'none',
    backgroundColor: '#101A55',
    borderRadius: 10,
    padding: 5,
  },
  button: {
    // backgroundColor: 'white',
    width: 38,
    height: 38,
    borderRadius: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 0,
    marginTop: 0,
  },
  textButton: {
    // textAlign: 'center',
    // fontSize: 28,
    // color: 'black',
    // width: '100%',
    // height: '100%',
    margin: 0,
    // fontWeight: 'bold'
  },
});
