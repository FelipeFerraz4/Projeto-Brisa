import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Upload from '../Telas/UploadPage';
import Login from '../Telas/Login';

const Stack = createNativeStackNavigator();

function AppRotasStackUpload() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Upload" component={Upload} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AppRotasStackUpload;
