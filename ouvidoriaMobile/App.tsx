import React from 'react';
import {View} from 'react-native';
import AllForms from './src/Components/AllForms/AllForms';
import {SafeAreaView} from 'react-native-safe-area-context';
function App() {
  return (
    <View>
    <SafeAreaView>
      <AllForms/>
    </SafeAreaView>
    </View>
  );
}

export default App;
