import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeForm from './src/Screen/HomeForm';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <HomeForm id={'0'} />
      </ScrollView>
    </SafeAreaView>
  );
}
