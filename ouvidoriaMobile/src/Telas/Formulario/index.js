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
import {SalvarRespostas} from '../../serviços/AsyncStorage';
import {FormsContext} from '../../contexts/FormsContext';
import {
  RespostaBordy,
  RespostaFooter,
  RespostaHeader,
  questionFooter,
  questionHeader,
  questionsForms,
} from './Data';

function Formulario() {
  const navigation = useNavigation();
  const {
    formularioAtual,
    formulario,
    servidor,
    respostas,
    setRespostas,
    setRespostaNovas,
  } = useContext(GlobalContext);
  const {forms, formsQuestion} = useContext(FormsContext);
  const [formularioNome, setFormularioNome] = useState(
    forms.data[formularioAtual],
  );
  const [questions, setQuestions] = useState(
    questionsForms(formsQuestion.data, formularioAtual),
  );

  const [respostaHeader, setRespostaHeader] = useState(RespostaHeader());
  const [respostaBody, setRespostaBody] = useState(
    RespostaBordy(questions.length),
  );
  const [respostaFooter, setRespostaFooter] = useState(
    RespostaFooter(questions.length),
  );

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
          <Text style={stylePage.tituloNome}>{formularioNome.nome}</Text>
          <View style={stylePage.main}>
            {questionHeader.map(item => (
              <QuestionComponet
                pergunta={item}
                key={item.id}
                resposta={respostaHeader}
                setResposta={setRespostaHeader}
              />
            ))}
          </View>
          <View style={stylePage.main}>
            {questions.map(item => (
              <QuestionComponet
                pergunta={item}
                key={item.id}
                resposta={respostaBody}
                setResposta={setRespostaBody}
              />
            ))}
          </View>
          <View style={stylePage.main}>
            {questionFooter.map(item => (
              <QuestionComponet
                pergunta={item}
                key={item.id}
                resposta={respostaFooter}
                setResposta={setRespostaFooter}
              />
            ))}
          </View>
          <View style={stylePage.footer}>
            <View style={stylePage.campoBotao}>
              <ButtonComponent
                texto={'Salvar'}
                onPress={() => {
                  const data = pegarData();
                  let respostaForms = respostaHeader.concat(respostaBody);
                  let respostaFormsFull = respostaForms.concat(respostaFooter);
                  const respostaFinal = {
                    id: respostas.respostas.length + 1,
                    idFormulario: formularioAtual + 1,
                    data: data,
                    servidor: servidor,
                    resposta: respostaFormsFull,
                  };

                  respostas.respostas.push(respostaFinal);

                  SalvarRespostas(respostas);
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
