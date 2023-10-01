import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeForm from './src/Screen/HomeForm';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <HomeForm idForm="1" />
    </SafeAreaView>
  );
}
