import React from 'react';
import { View } from 'react-native';
import { AllForms } from './src/Components/AllForms/AllForms'; // Importe usando as chaves para importação nomeada

import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <View>
      <SafeAreaView>
        <AllForms />
      </SafeAreaView>
    </View>
  );
}

export default App;
