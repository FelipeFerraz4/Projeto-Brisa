import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import AppRotasStackStart from './src/rotas/AppRotasStackStart';
import {InfoProvider} from './src/contexts/GlobalContext';

export default function App() {
  return (
    <SafeAreaView style={styleApp.page}>
      <StatusBar />
      <InfoProvider>
        <AppRotasStackStart />
      </InfoProvider>
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  page: {
    flex: 1,
  },
});
