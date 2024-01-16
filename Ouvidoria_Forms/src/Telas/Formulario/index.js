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
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import ButtonComponent from '../../components/ButtonComponent';
import QuestionComponet from './QuestionComponent';
import {GlobalContext} from '../../contexts/GlobalContext';

function Formulario() {
  const {
    formularioAtual,
    formulario,
    servidor,
    respostas,
    setRespostas,
    setRespostaNovas,
  } = useContext(GlobalContext);
  const navigation = useNavigation();
  const dados = formulario;
  let dadosResposta = [
    {
      id: 1,
      respostaFechada: [],
      respostaAberta: '',
    },
  ];
  const [resposta, setResposta] = useState(dadosResposta);

  useEffect(() => {
    for (let i = 1; i < dados.perguntas.length; i++) {
      resposta.push({
        id: i + 1,
        respostaFechada: [],
        respostaAberta: '',
      });
    }

    setResposta(resposta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBackButton() {
    navigation.goBack();
  }

  function pegarData() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const data = day + '/' + month + '/' + year;
    return data;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}
      style={stylePage.container}>
      <Header voltar={handleBackButton} arrow={true} />
      <ScrollView style={stylePage.scroll}>
        <View style={stylePage.page}>
          <Text style={stylePage.tituloNome}>{dados.titulo}</Text>
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
                  const data = pegarData();
                  const respostaFinal = {
                    id: respostas.length + 1,
                    idFormulario: formularioAtual + 1,
                    data: data,
                    servidor: servidor,
                    resposta: resposta,
                  };
                  console.log(respostaFinal.id);
                  console.log(respostaFinal.idFormulario);
                  console.log(respostaFinal.data);
                  console.log(respostaFinal.servidor);
                  console.log(respostaFinal.resposta);
                  respostas.push(respostaFinal);
                  setRespostas(respostas);
                  console.log(respostas);
                  setRespostaNovas(true);
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
