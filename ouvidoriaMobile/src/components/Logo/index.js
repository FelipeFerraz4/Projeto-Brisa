import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import LogoOuvidoria from '../../assets/logo/logo.png';

const largura = Dimensions.get('screen').width;

export default function Logo() {
  return (
    <View style={styleLogo.conteiner}>
      <Image
        source={LogoOuvidoria}
        style={styleLogo.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styleLogo = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '1%',
  },
  image: {
    width: largura,
    height: 270,
  },
});
