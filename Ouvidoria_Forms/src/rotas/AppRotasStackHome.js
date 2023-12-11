import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Telas/Home';
import Login from '../Telas/Login';
import Servidor from '../Telas/Servidor';
import RomariaForm from '../Telas/HomeForm/RomariaForm';
import Formulario from '../Telas/HomeForm/Formulario';

const Stack = createNativeStackNavigator();

function AppRotasStackHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Servidor" component={Servidor} />
      <Stack.Screen name="RomariaForm" component={RomariaForm} />
      <Stack.Screen name="Formulario" component={Formulario} />
    </Stack.Navigator>
  );
}

export default AppRotasStackHome;
