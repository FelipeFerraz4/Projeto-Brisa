import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CampoInputAberto from '../Componentes/campoInputAberto';
import stylePage from '../Componentes/stylePage';
import {CarregarOuvidoria} from '../../../serviços/CarregarForms';
import CheckBox from '../Componentes/CheckBox/CheckBox';
import CampoMisto from '../Componentes/CampoMisto';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header';
import ButtonComponent from '../../../components/ButtonComponent';

function OuvidoriaIntineranteForm() {
  const navigation = useNavigation();
  const dados = CarregarOuvidoria();

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={40}
      style={stylePage.page}>
      <ScrollView>
        <Header voltar={handleBackButton} />
        <View style={stylePage.titulo}>
          <Text style={stylePage.tituloNome}>{dados.titulo}</Text>
          <Text style={stylePage.tituloSubnome}>{dados.subtitulo}</Text>
        </View>

        <View style={stylePage.titulo}>
          <CampoInputAberto pergunta={dados.perguntas[0].texto} />
          <CampoInputAberto pergunta={dados.perguntas[1].texto} />
          <CampoInputAberto pergunta={dados.perguntas[2].texto} />
          <CampoInputAberto pergunta={dados.perguntas[3].texto} />

          <CheckBox
            pergunta={dados.perguntas[4].texto}
            quantityChackBox={dados.perguntas[4].quantidadeCamposFechados}
            option={dados.perguntas[4].option}
          />
        </View>

        <View style={stylePage.titulo}>
          <CampoMisto
            pergunta={dados.perguntas[5].texto}
            quantityChackBox={dados.perguntas[5].quantidadeCamposFechados}
            option={dados.perguntas[5].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[6].texto}
            quantityChackBox={dados.perguntas[6].quantidadeCamposFechados}
            option={dados.perguntas[6].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[7].texto}
            quantityChackBox={dados.perguntas[7].quantidadeCamposFechados}
            option={dados.perguntas[7].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[8].texto}
            quantityChackBox={dados.perguntas[8].quantidadeCamposFechados}
            option={dados.perguntas[8].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[9].texto}
            quantityChackBox={dados.perguntas[9].quantidadeCamposFechados}
            option={dados.perguntas[9].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[10].texto}
            quantityChackBox={dados.perguntas[10].quantidadeCamposFechados}
            option={dados.perguntas[10].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[11].texto}
            quantityChackBox={dados.perguntas[11].quantidadeCamposFechados}
            option={dados.perguntas[11].option}
          />
          <CampoMisto
            pergunta={dados.perguntas[12].texto}
            quantityChackBox={dados.perguntas[12].quantidadeCamposFechados}
            option={dados.perguntas[12].option}
          />
          <CampoInputAberto pergunta={dados.perguntas[13].texto} />
        </View>
        <View style={stylePage.footer}>
          <ButtonComponent
            texto={'Salvar'}
            onPress={handleBackButton}
            styleBotao={stylePage.botao}
            styleContainer={stylePage.botaoContainer}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default OuvidoriaIntineranteForm;
