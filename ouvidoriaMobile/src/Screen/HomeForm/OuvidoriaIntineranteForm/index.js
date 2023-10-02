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
import {CarregarOuvidoria} from '../../../serviços/CarregarForms';

function OuvidoriaIntineranteForm() {
  const dados = CarregarOuvidoria();
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
          <Text style={stylePage.tituloNome}>
            Pesquisa da Ouvidoria Itinerante
          </Text>
          <Text style={stylePage.tituloSubnome}>
            Formulário de avaliação da satisfação dos usuários dos serviços
            públicos do Município do Juazeiro do Norte - CE
          </Text>
        </View>
        <View style={stylePage.titulo}>
          <CampoInputAberto
            pergunta={dados.perguntasDadosPessoaisAbertas[0].texto}
          />
          <CampoInputAberto
            pergunta={dados.perguntasDadosPessoaisAbertas[1].texto}
          />
          <CampoInputAberto
            pergunta={dados.perguntasDadosPessoaisAbertas[2].texto}
          />
          <CampoInputAberto
            pergunta={dados.perguntasDadosPessoaisAbertas[3].texto}
          />
          <CampoInputFechado
            pergunta={dados.perguntasDadosPessoaisFechadas[0].texto}
          />
        </View>
        <View style={stylePage.titulo}>
          <CampoInputFechado pergunta={dados.perguntasFechadas[0].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[1].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[2].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[3].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[4].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[5].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[6].texto} />
          <CampoInputFechado pergunta={dados.perguntasFechadas[7].texto} />
          <CampoInputAberto pergunta={dados.perguntasAbertas[0].texto} />
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
