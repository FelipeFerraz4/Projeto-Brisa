import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
/*
import Upload from '../Telas/UploadPage';
*/
const Stack = createNativeStackNavigator();

function AppRotasStackUpload() {
  return (
    /*
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
    */
    <Text>Hello</Text>
  );
}

export default AppRotasStackUpload;
