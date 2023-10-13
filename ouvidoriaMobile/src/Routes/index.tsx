/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/Login';
import {Upload} from '../pages/UploadPage/index';
import Icon from 'react-native-vector-icons/EvilIcons';
import FormularioHome from '../pages/FormularioHome';
import Romaria from '../pages/HomeForm/RomariaForm';
import OuvidoriaIntinerante from '../pages/HomeForm/OuvidoriaIntineranteForm';
import Home from '../pages/Home';
const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="FormularioHome"
      component={FormularioHome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Romaria"
      component={Romaria}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="OuvidoriaIntinerante"
      component={OuvidoriaIntinerante}
      options={{
        headerShown: false,
      }}
    />
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
