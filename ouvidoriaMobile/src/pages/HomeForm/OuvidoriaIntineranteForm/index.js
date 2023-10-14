import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import CampoInputAberto from '../Componentes/campoInputAberto';
import Voltar from '../../../assets/icon/arrow_black.png';
import stylePage from '../Componentes/stylePage';
import {CarregarOuvidoria} from '../../../serviços/CarregarForms';
import CheckBox from '../Componentes/CheckBox/CheckBox';
import {useNavigation} from '@react-navigation/native';

function OuvidoriaIntineranteForm() {
  const Navigation = useNavigation();
  const dados = CarregarOuvidoria();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={40}
      style={stylePage.page}>
      <ScrollView>
        <View style={stylePage.topo}>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate('FormularioHome');
            }}>
            <Image source={Voltar} />
          </TouchableOpacity>
          <Text style={stylePage.headerTexto}>Ouvidoria</Text>
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
            <CheckBox
              key={pergunta.id}
              pergunta={pergunta.texto}
              quantityChackBox={pergunta.campos}
              option={pergunta.option}
            />
          ))}
        </View>

        <View style={stylePage.titulo}>
          {dados.perguntas.fechada.map(pergunta => (
            <CheckBox
              key={pergunta.id}
              pergunta={pergunta.texto}
              quantityChackBox={pergunta.campos}
              option={pergunta.option}
            />
          ))}
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
