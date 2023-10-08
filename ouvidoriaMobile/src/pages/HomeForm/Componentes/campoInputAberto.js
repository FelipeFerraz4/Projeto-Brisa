import React from 'react';
import {Text, View, TextInput} from 'react-native';
import stylePage from './style';

function CampoInputAberto({pergunta: texto}) {
  return (
    <View style={stylePage.campo}>
      <Text style={stylePage.campoTitulo}>{texto}</Text>
      <TextInput style={stylePage.inputText} />
    </View>
  );
}

export default CampoInputAberto;
