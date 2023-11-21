import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styleUpload from './styles';
import Header from '../../components/Header';
import Botao from '../../components/Botao';
import {CarregarRespostas} from '../../serviços/CarregarForms';

export default function Upload() {
  // const navigation = useNavigation();
  const Respostas = CarregarRespostas();

  return (
    <SafeAreaView style={styleUpload.container}>
      <View style={styleUpload.header}>
        <Header leftArrow={false} />
      </View>
      <View style={styleUpload.main}>
        <Text style={styleUpload.titulo}>Formulários cadastrados</Text>
        <ScrollView style={styleUpload.areaForms}>
          {Respostas.map(item => (
            <TouchableOpacity key={item.id} style={styleUpload.resposta}>
              <Text style={styleUpload.respostaTexto}>
                {item.id} - {item.nomeFormulario}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styleUpload.footer}>
        <Botao
          texto={'Enviar'}
          styleBotao={styleUpload.botao}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
