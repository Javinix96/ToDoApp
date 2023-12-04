import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {PostItComponent} from './PostItComponent';
import {getDateToNumberP, getIndex} from '../../helpers/helperFunctions';
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
        orderDate: getDateToNumberP(dat),
      };
      const index = getIndex(todo.date);
      pruebas[index].push(todo);
    }
    for (let i = 0; i < pruebas.length; i++)
      pruebas[i] = pruebas[i].sort((a, b) => a.orderDate - b.orderDate);

    setData(pruebas);
  }, []);
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        style={{
          width: '100%',
          // height: '100%',
          // padding: 10,
          // backgroundColor: 'blue',
          // flex: 1,
        }}
        showsHorizontalScrollIndicator
        initialNumToRender={3}
        // numColumns={3}
        decelerationRate={0}
        snapToInterval={400}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        horizontal
        renderItem={({item, index}) => (
          <Item key={index} index={index} todos={item} />
        )}
        keyExtractor={(item, index) => index}
        // ListFooterComponent={<View />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'black',
    width: '98%',
    // height: '100%',
    marginTop: 10,
    // // flex: 1,
  },
  item: {
    // backgroundColor: 'red',
    // marginVertical: 2,
    marginHorizontal: 10,
    width: 380,
    height: '105%',
    alignContent: 'space-between',
    alignItems: 'center',
    // flex: 1,
  },
  text: {
    color: 'white',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
    width: '100%',
    height: '100%',
    margin: 10,
    flexGrow: 1,
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
        initialNumToRender={2}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        {todos.map(item => {
          return <PostItComponent key={item.id} text={item.date.toString()} />;
        })}
      </ScrollView>
    </View>
  );
};
