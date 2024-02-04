import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import AppRotasStackStart from './src/rotas/AppRotasStackStart';
import {InfoProvider} from './src/contexts/GlobalContext';
import {AuthProvider} from './src/contexts/AuthContext';

export default function App() {
  return (
    <SafeAreaView style={styleApp.page}>
      <StatusBar />
      <InfoProvider>
        <AuthProvider>
          <AppRotasStackStart />
        </AuthProvider>
      </InfoProvider>
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  page: {
    flex: 1,
  },
});
