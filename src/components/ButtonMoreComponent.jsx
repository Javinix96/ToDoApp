import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ButttonMoreComponent = ({moveDown,setButton}) => {

  const press = () => {
    moveDown();
    setButton(false);
  }

  return (
    <TouchableOpacity style={buttonStyle.button} onPress={() => press()}>
        <Text style={buttonStyle.textButton}>MORE</Text>
    </TouchableOpacity>
  )
}

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: '#C27300',
    width: 150,
    height: 35,
    borderRadius: 20,
    marginTop: 25,
    justifyContent: 'center'
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
