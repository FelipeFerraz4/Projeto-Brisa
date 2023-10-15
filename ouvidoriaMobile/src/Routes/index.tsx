import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../pages/Login';
import {Upload} from '../pages/UploadPage/index';
import FormularioHome from '../pages/FormularioHome';
import Romaria from '../pages/HomeForm/RomariaForm';
import OuvidoriaIntinerante from '../pages/HomeForm/OuvidoriaIntineranteForm/';
import Home from '../pages/Home';
import SplashScreen from '../pages/SplashScreen';
const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{
        headerShown: false,
      }}
    />
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
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
