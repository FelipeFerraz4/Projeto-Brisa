import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styleServidor from './style';
import Person from '../../assets/icon/person.png';
import Logo from '../../assets/logo/logo.png';
import arrow from '../../assets/icon/arrow_black.png';

function FormularioHome() {
  const [Servidor, SetServidor] = useState('');

  return (
    <View style={styleServidor.conteiner}>
      <View style={styleServidor.campoHeader}>
        <TouchableOpacity>
          <Image source={arrow} style={styleServidor.iconVoltar} />
        </TouchableOpacity>
      </View>
      <View style={styleServidor.campoLogo}>
        <Image source={Logo} />
      </View>
      <View style={styleServidor.campoForm}>
        <Text style={styleServidor.titulo}>Nome do servidor</Text>
        <View style={styleServidor.textInput}>
          <Image
            source={Person}
            style={styleServidor.textInputImage}
            resizeMode="contain"
          />
          <TextInput
            value={Servidor}
            onChangeText={nome => {
              SetServidor(nome);
            }}
          />
        </View>
      </View>
      <View style={styleServidor.campoBotao}>
        <TouchableOpacity style={styleServidor.botao}>
          <Text style={styleServidor.botaoTexto}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FormularioHome;
