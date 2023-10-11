import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styleComponent from './style';
import person from '../../assets/icon/person.png';

function FormularioHome() {
  const [Servidor, SetServidor] = useState('');

  return (
    <View style={styleComponent.conteiner}>
      <Text>Nome do servidor</Text>
      <TextInput
        style={styleComponent.textInput}
        onChangeText={nome => {
          SetServidor(nome);
        }}
      />
    </View>
  );
}

export default FormularioHome;
