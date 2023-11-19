import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/logo/logo.png';

function SplashScreen() {
  const navigation = useNavigation();
  /*
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'AppRotasTab'}],
    });
  }, 1500);
*/
  return (
    <View style={style.page}>
      <Image source={Logo} style={style.image} />
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
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
