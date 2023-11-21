import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styleUpload from './styles';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Botao from '../../components/Botao';

export default function Upload() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styleUpload.container}>
      <View style={styleUpload.header}>
        <Header leftArrow={false} />
      </View>
      <View style={styleUpload.main}>
        <Text style={styleUpload.titulo}>Formulários cadastrados</Text>
        <ScrollView style={styleUpload.areaForms}>
          <Text>Formulários</Text>
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
