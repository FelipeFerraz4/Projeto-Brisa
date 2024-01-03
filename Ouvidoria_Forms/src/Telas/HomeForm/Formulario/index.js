import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import stylePage from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../../components/Header';
import ButtonComponent from '../../../components/ButtonComponent';
import QuestionComponet from './QuestionComponent';
import {GlobalContext} from '../../../contexts/GlobalContext';

function Formulario() {
  const {formularioAtual, formulario} = useContext(GlobalContext);
  const navigation = useNavigation();
  const dados = formulario;
  const [respostaQuestao, setRespostaQuestao] = useState([]);
  const [respostaTesxto, setRespostaTexto] = useState('');
  const [completeMessage, setCompleteMessage] = useState(true);
  const [styleMessage, setStyleMessage] = useState(stylePage.messageCompleted);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const quantidadePerguntas = dados.perguntas.length;
  let dadosResposta = [
    {
      id: 1,
      respostaFechada: [],
      respostaAberta: '',
    },
  ];
  const [resposta, setResposta] = useState(dadosResposta);
  const [respostaEmBranco, setRespostaEmBranco] = useState([]);

  useEffect(() => {
    for (let i = 1; i < dados.perguntas.length; i++) {
      resposta.push({
        id: i + 1,
        respostaFechada: [],
        respostaAberta: '',
      });
    }

    setRespostaEmBranco(resposta);
    setResposta(resposta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dados.perguntas.length);
  console.log(resposta);

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

  function limpaResposta() {
    setResposta(respostaEmBranco);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}
      style={stylePage.container}>
      <Header voltar={handleBackButton} arrow={true} />
      <ScrollView style={stylePage.scroll}>
        <View style={stylePage.page}>
          <Text style={stylePage.tituloNome}>
            {dados.titulo} - Novo{formularioAtual}
          </Text>
          <Text style={stylePage.tituloSubnome}>{dados.subtitulo}</Text>
          <View style={stylePage.main}>
            {dados.perguntas.map(item => (
              <QuestionComponet
                pergunta={item}
                key={item.id}
                resposta={resposta}
                setResposta={setResposta}
              />
            ))}
          </View>
          <View style={stylePage.footer}>
            <View style={stylePage.campoBotao}>
              <ButtonComponent
                texto={'Salvar'}
                onPress={() => {
                  console.log(resposta);
                  limpaResposta();
                  Alert.alert('Resposta Salva');
                  navigation.replace('Formulario');
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
