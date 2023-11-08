import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Logo from '../../assets/logo/logo.png';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

function SplashScreen({navigation}: Props) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 1000);

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
