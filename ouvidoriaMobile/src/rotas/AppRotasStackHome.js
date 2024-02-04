import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Telas/Home';
import Servidor from '../Telas/Servidor';
import Formulario from '../Telas/Formulario';

const Stack = createNativeStackNavigator();

function AppRotasStackHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Servidor" component={Servidor} />
      <Stack.Screen name="Formulario" component={Formulario} />
    </Stack.Navigator>
  );
}

export default AppRotasStackHome;
