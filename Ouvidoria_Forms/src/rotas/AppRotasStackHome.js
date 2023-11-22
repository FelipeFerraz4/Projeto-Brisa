import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Telas/Home';
import Login from '../Telas/Login';
import Servidor from '../Telas/Servidor';
import RomariaForm from '../Telas/HomeForm/RomariaForm';
import OuvidoriaIntineranteForm from '../Telas/HomeForm/OuvidoriaIntineranteForm';

const Stack = createNativeStackNavigator();

function AppRotasStackHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Servidor" component={Servidor} />
      <Stack.Screen name="RomariaForm" component={RomariaForm} />
      <Stack.Screen
        name="OuvidoriaIntineranteForm"
        component={OuvidoriaIntineranteForm}
      />
    </Stack.Navigator>
  );
}

export default AppRotasStackHome;
