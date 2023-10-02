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
import CampoInputFechado from '../Componentes/campoInputFechado';
import Voltar from '../../../assets/voltar.svg';
import Login from '../../../assets/person-circle.svg';
import stylePage from '../Componentes/stylePage';
import {CarregarRomaria} from '../../../serviços/CarregarForms';

function OuvidoriaIntineranteForm() {
  const dados = CarregarRomaria();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
      style={stylePage.page}>
      <ScrollView>
        <View style={stylePage.topo}>
          <Voltar width={40} height={30} />
          <Login width={40} height={30} />
        </View>

        <View style={stylePage.titulo}>
          <Text style={stylePage.tituloNome}>{dados.titulo}</Text>
          <Text style={stylePage.tituloSubnome}>{dados.subtitulo}</Text>
        </View>

        <View style={stylePage.titulo}>
          {dados.dadosPessoais.abertos.map(pergunta => (
            <CampoInputAberto key={pergunta.id} pergunta={pergunta.texto} />
          ))}
          {dados.dadosPessoais.fechados.map(pergunta => (
            <CampoInputFechado key={pergunta.id} pergunta={pergunta.texto} />
          ))}
        </View>

        <View style={stylePage.titulo}>
          {dados.perguntas.fechada.map(pergunta => (
            <CampoInputFechado key={pergunta.id} pergunta={pergunta.texto} />
          ))}
          <CampoInputFechado pergunta={dados.perguntas.mista[0].texto} />
          {dados.perguntas.aberta.map(pergunta => (
            <CampoInputAberto key={pergunta.id} pergunta={pergunta.texto} />
          ))}
        </View>
        <View>
          <TouchableOpacity style={stylePage.botao}>
            <Text style={stylePage.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default OuvidoriaIntineranteForm;
