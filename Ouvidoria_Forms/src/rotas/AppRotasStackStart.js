import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../Telas/SplashScreen';
import AppRotasTab from './AppRotasTab';

const Stack = createNativeStackNavigator();

function AppRotasStackStart() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AppRotasTab" component={AppRotasTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRotasStackStart;
