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
  } = anims;

  return (
    <View style={{...todoStyles.todoCon, height: height}}>
      <View style={todoStyles.todoInput}>
        <TextInput
          style={todoStyles.inputS}
          editableds
          multiline
          numberOfLines={1}
          value={text}
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
    height: 10,
    zIndex: -1,
    // justifyContent: '',
    alignItems: 'center',
    // display: 'flex',
    // flexDirection: 'column',
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
    // backgroundColor: 'orange'
  },
  button: {
    // backgroundColor: 'white',
    width: 38,
    height: 38,
    borderRadius: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 0,
    marginTop: 10,
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
