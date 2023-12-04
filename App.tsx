import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MainPage} from './src/pages/mainPage';
import {BodyComponent} from './src/components/bodyComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <MainPage />
    </SafeAreaView>
  );
}

export default App;
