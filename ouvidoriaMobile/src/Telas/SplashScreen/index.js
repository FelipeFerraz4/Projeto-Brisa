import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../components/Logo';

function SplashScreen() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'AppRotasTab'}],
    });
  }, 500);

  return (
    <View style={style.page}>
      <Logo />
    </View>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6FF',
  },
});

export default SplashScreen;
