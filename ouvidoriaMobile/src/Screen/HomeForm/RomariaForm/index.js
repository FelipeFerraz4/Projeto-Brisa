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

function OuvidoriaIntineranteForm() {
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
          <Text style={stylePage.tituloNome}>Pesquisa das Romaria</Text>
          <Text style={stylePage.tituloSubnome}>
            Formulário de avaliação da satisfação dos usuários dos serviços
            públicos do Município do Juazeiro do Norte - CE
          </Text>
        </View>
        <View style={stylePage.titulo}>
          <CampoInputAberto pergunta={'pergunta1'} />
          <CampoInputAberto pergunta={'pergunta2'} />
          <CampoInputAberto pergunta={'pergunta3'} />
          <CampoInputAberto pergunta={'pergunta4'} />
          <CampoInputFechado />
        </View>
        <View style={stylePage.titulo}>
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputFechado />
          <CampoInputAberto pergunta={'pergunta5'} />
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
