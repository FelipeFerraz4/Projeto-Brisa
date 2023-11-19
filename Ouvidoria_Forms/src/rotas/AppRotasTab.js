import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppRotasStackHome from './AppRotasStackHome';
import AppRotasStackUpload from './AppRotasStackUpload';

const Tab = createBottomTabNavigator();

function AppRotasTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AppRotasStackHome" component={AppRotasStackHome} />
        <Tab.Screen
          name="AppRotasStackUpload"
          component={AppRotasStackUpload}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppRotasTab;
