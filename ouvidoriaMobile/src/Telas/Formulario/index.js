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
  QuestionFooter,
  RespostaBordy,
  RespostaFooter,
  RespostaHeader,
  estruturaResposta,
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

  // console.log(formsQuestion);
  // console.log(formsQuestion.data);
  // console.log(questions);
  // const dados = formulario;
  const [respostaHeader, setRespostaHeader] = useState(RespostaHeader());
  const [respostaBody, setRespostaBody] = useState(
    RespostaBordy(questions.length),
  );
  const [respostaFooter, setRespostaFooter] = useState(
    RespostaFooter(questions.length),
  );
  // console.log(questionFooter);
  // console.log(respostaFooter);
  // console.log(respostaFooter);

  // useEffect(() => {
  //   for (let i = 1; i < questions.length + questionHeader.length; i++) {
  //     resposta.push({
  //       id: i + 1,
  //       respostaFechada: [],
  //       respostaAberta: '',
  //     });
  //   }

  //   setResposta(resposta);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
                  // console.log(respostaHeader);
                  // console.log(respostaBody);
                  // console.log(respostaFooter);
                  let respostaForms = respostaHeader.concat(respostaBody);
                  let respostaFormsFull = respostaForms.concat(respostaFooter);
                  console.log(respostaFormsFull);

                  // console.log(respostas);
                  // console.log(respostas.respostas);
                  // console.log(Array.from(respostas.respostas).length);

                  const respostaFinal = {
                    id: respostas.respostas.length + 1,
                    idFormulario: formularioAtual + 1,
                    data: data,
                    servidor: servidor,
                    resposta: respostaFormsFull,
                  };

                  // console.log(respostaFinal.id);
                  // console.log(respostaFinal.idFormulario);
                  // console.log(respostaFinal.data);
                  // console.log(respostaFinal.servidor);
                  // console.log(respostaFinal.resposta);
                  // console.log(respostas.respostas.length);

                  respostas.respostas.push(respostaFinal);

                  // if (Array.from(respostas).length === 0) {
                  //   setRespostas(respostaFinal);
                  // } else {
                  //   setRespostas(respostas.push(respostaFinal));
                  // }
                  // console.log(respostas);

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
