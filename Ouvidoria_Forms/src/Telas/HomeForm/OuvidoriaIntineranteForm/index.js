import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
          <CampoInputAberto pergunta={dados.dadosPessoais.abertos[0].texto} />
          <CampoInputAberto pergunta={dados.dadosPessoais.abertos[1].texto} />
          <CampoInputAberto pergunta={dados.dadosPessoais.abertos[2].texto} />
          <CampoInputAberto pergunta={dados.dadosPessoais.abertos[3].texto} />

          <CheckBox
            pergunta={dados.dadosPessoais.fechados[0].texto}
            quantityChackBox={dados.dadosPessoais.fechados[0].campos}
            option={dados.dadosPessoais.fechados[0].option}
          />
        </View>

        <View style={stylePage.titulo}>
          <CampoMisto
            pergunta={dados.perguntas.mista[0].texto}
            quantityChackBox={dados.perguntas.mista[0].campos}
            option={dados.perguntas.mista[0].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[1].texto}
            quantityChackBox={dados.perguntas.mista[1].campos}
            option={dados.perguntas.mista[1].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[2].texto}
            quantityChackBox={dados.perguntas.mista[2].campos}
            option={dados.perguntas.mista[2].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[3].texto}
            quantityChackBox={dados.perguntas.mista[3].campos}
            option={dados.perguntas.mista[3].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[4].texto}
            quantityChackBox={dados.perguntas.mista[4].campos}
            option={dados.perguntas.mista[4].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[5].texto}
            quantityChackBox={dados.perguntas.mista[5].campos}
            option={dados.perguntas.mista[5].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[6].texto}
            quantityChackBox={dados.perguntas.mista[6].campos}
            option={dados.perguntas.mista[6].option}
          />
          <CampoMisto
            pergunta={dados.perguntas.mista[7].texto}
            quantityChackBox={dados.perguntas.mista[7].campos}
            option={dados.perguntas.mista[7].option}
          />
          <CampoInputAberto pergunta={dados.perguntas.aberta[0].texto} />
        </View>
        <View>
          <TouchableOpacity style={stylePage.botao} onPress={handleBackButton}>
            <Text style={stylePage.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default OuvidoriaIntineranteForm;
