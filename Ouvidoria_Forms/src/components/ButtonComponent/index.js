import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ({
  texto,
  styleBotao,
  styleTexto,
  styleContainer,
  onPress,
}) {
  return (
    <SafeAreaView style={[styleComponent.container, styleContainer]}>
      <TouchableOpacity
        style={[styleBotao, styleComponent.botao]}
        onPress={onPress}>
        <Text style={[styleTexto, styleComponent.botaoTexto]}>{texto}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styleComponent = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    height: 80,
  },
  botao: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30358C',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
  },
});
