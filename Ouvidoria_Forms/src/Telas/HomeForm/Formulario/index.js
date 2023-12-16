import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import stylePage from './style';
import {CarregarOuvidoria} from '../../../serviços/CarregarForms';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header';
import ButtonComponent from '../../../components/ButtonComponent';
import QuestionComponet from './QuestionComponent';

function Formulario() {
  const navigation = useNavigation();
  const dados = CarregarOuvidoria();
  const [resposta, setResposta] = useState([]);
  const [respostaQuestao, setRespostaQuestao] = useState([]);
  const [respostaTesxto, setRespostaTexto] = useState('');
  const [completeMessage, setCompleteMessage] = useState(true);
  const [styleMessage, setStyleMessage] = useState(stylePage.messageCompleted);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const quantidadePerguntas = dados.perguntas.length;
  // console.log(perguntaAtual);
  // console.log(quantidadePerguntas);
  // console.log(resposta);

  function adicionarQuestao() {
    resposta.push({
      id: perguntaAtual + 1,
      respostaFechada: respostaQuestao,
      respostaAberta: respostaTesxto,
    });

    setResposta(resposta);

    setRespostaQuestao([]);
    setRespostaTexto('');
  }

  function salvarResposta() {
    setResposta([]);
  }

  useEffect(() => {
    if (completeMessage) {
      setStyleMessage(stylePage.messageComplete);
    } else {
      setStyleMessage(stylePage.messageCompletedVisible);
    }
  }, [completeMessage]);

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}
      style={stylePage.container}>
      <Header voltar={handleBackButton} arrow={true} />
      <ScrollView style={stylePage.scroll}>
        <View style={stylePage.page}>
          {/* <View style={styleMessage}>
            <Text>Mensagem concluido</Text>
          </View> */}
          <Text style={stylePage.tituloNome}>{dados.titulo} - Novo</Text>
          <Text style={stylePage.tituloSubnome}>{dados.subtitulo}</Text>
          <View style={stylePage.main}>
            {dados.perguntas.map(item => (
              <QuestionComponet
                key={item.id}
                option={item.option}
                texto={item.texto}
                tipoPergunta={item.tipoPergunta}
                quantidadeCamposFechados={item.quantidadeCamposFechados}
                hookResposta={respostaQuestao}
                hookSetResposta={setRespostaQuestao}
                hookTexto={respostaTesxto}
                hookSetTexto={setRespostaTexto}
              />
            ))}
          </View>
          <View style={stylePage.footer}>
            <View style={stylePage.campoBotao}>
              <ButtonComponent
                texto={'Salvar'}
                onPress={() => {
                  if (perguntaAtual < quantidadePerguntas) {
                    adicionarQuestao();
                    salvarResposta();
                    setPerguntaAtual(0);
                  }
                }}
                styleBotao={stylePage.botao}
                styleContainer={stylePage.botaoContainer}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Formulario;
