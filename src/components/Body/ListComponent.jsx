import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {PostItComponent} from './PostItComponent';
import {getIndex} from '../../helpers/helperFunctions';
import uuid from 'react-native-uuid';
export const ListComponent = () => {
  const [data, setData] = useState([[], [], []]);

  useEffect(() => {
    const pruebas = [[], [], []];
    for (let i = 0; i < 30; i++) {
      const dat = new Date();
      const r = parseInt(Math.random() * (10 - -10) + -10);
      dat.setDate(dat.getDate() + r);
      const todo = {
        id: uuid.v4(),
        date: dat,
        todo: 'pruebas',
      };
      const index = getIndex(todo.date);
      pruebas[index].push(todo);
    }
    setData(pruebas);
  }, []);
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator
        decelerationRate={0}
        snapToInterval={400}
        contentContainerStyle={{
          paddingTop: 20,
          borderRadius: 20,
          overflow: 'hidden',
        }}
        horizontal={true}
        renderItem={({item, index}) => (
          <Item key={index} index={index} todos={item} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    overflow: 'hidden',
  },
  item: {
    // backgroundColor: 'black',
    marginVertical: 2,
    marginHorizontal: 2,
    width: 400,
    height: 440,
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
  },
});

const Item = ({index, todos}) => {
  return (
    <View style={styles.item}>
      <ScrollView
        style={styles.scrollView}
        alwaysBounceVertical
        scrollEventThrottle={2}
        snapToInterval={2}
        decelerationRate={0}
        showsVerticalScrollIndicator={false}>
        {todos.map(item => {
          console.log(item);
          return <PostItComponent key={item.id} text={item.date.toString()} />;
        })}
      </ScrollView>
    </View>
  );
};
