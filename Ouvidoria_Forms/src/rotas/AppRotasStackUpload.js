import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Upload from '../Telas/UploadPage';

const Stack = createNativeStackNavigator();

function AppRotasStackUpload() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
}

export default AppRotasStackUpload;
