import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {dateUTC, getTime} from '../../helpers/helperFunctions';

export const PostItComponent = ({text, date}) => {
  const [top, setTop] = useState();

  useEffect(() => {
    setTop(parseInt(Math.random() * (22 - 5) + 5));
  }, []);
  return (
    <View style={{...style.container, marginTop: top}}>
      <View style={style.mainText}>
        <Text style={style.textContent}>
          {text.length >= 46 ? (
            <>
              <Text>{text[0].toUpperCase() + text.substring(1, 46)}</Text>
              <Text style={{color: 'black', fontSize: 35}}>...</Text>
            </>
          ) : (
            text
          )}
        </Text>
      </View>
      <View style={style.dateCont}>
        <Text style={style.dateText}>
          {'De: ' +
            dateUTC(date) +
            '   Para: ' +
            dateUTC(date) +
            ' ' +
            getTime(date)}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '45%',
    height: 131,
    color: 'white',
    margin: 3,
    backgroundColor: '#DBB347',
    // position: 'absolute',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: 3,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  mainText: {
    // backgroundColor: 'black',
    width: '98%',
    height: '70%',
  },
  dateCont: {
    // backgroundColor: 'red',
    width: '98%',
    height: '25%',
  },
  textContent: {
    color: 'white',
    lineHeight: 30,
    textAlign: 'justify',
    fontSize: 18,
  },
  dateText: {
    color: 'black',
  },
});
