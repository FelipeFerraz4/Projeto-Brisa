import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import AppRotasStackStart from './src/rotas/AppRotasStackStart';

export default function App() {
  return (
    <SafeAreaView style={styleApp.page}>
      <StatusBar />
      <AppRotasStackStart />
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  page: {
    flex: 1,
  },
});
