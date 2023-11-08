import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import stylePage from './style';

function CampoInputAberto({pergunta: texto}) {
  const [Resposta, SetResposta] = useState('');
  return (
    <View style={stylePage.campo}>
      <Text style={stylePage.campoTitulo}>{texto}</Text>
      <TextInput
        style={stylePage.inputText}
        placeholder="Digite mais informações"
        value={Resposta}
        onChangeText={SetResposta}
      />
    </View>
  );
}

export default CampoInputAberto;
