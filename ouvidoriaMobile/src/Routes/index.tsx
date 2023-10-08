/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/Login';
import {Upload} from '../pages/UploadPage';
import Icon from 'react-native-vector-icons/EvilIcons';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Upload"
      component={Upload}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerRight: () => <Icon name="user" size={50} />,
      }}
    />
  </Stack.Navigator>
);
