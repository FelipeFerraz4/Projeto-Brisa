import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import styleQuestion from './style';
import {CheckBox} from '@rneui/themed';
import {
  YesNoAlternativeQuestion,
  defaultAlternativeQuestion,
  genero,
  questionHeader,
  servicesAlternativeQuestion,
  yesNoAlternativeQuestion,
} from '../Data';

function QuestionComponent({pergunta, resposta, setResposta}) {
  const [texto, setTexto] = useState('');
  const [checked, setChecked] = useState([false, false, false, false, false]);

  useEffect(() => {
    async function pegarRespostaTexto() {
      let index = (await pergunta.id) - 1;

      let respostaTexto = '';
      if (texto !== '') {
        respostaTexto = texto;
      }

      try {
        resposta[index].respostaAberta = respostaTexto;
        setResposta(resposta);
      } catch (error) {
        console.log(error);
      }
    }
    pegarRespostaTexto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);

  useEffect(() => {
    async function pegarRespostaIcone() {
      let option = defaultAlternativeQuestion;
      if (pergunta.tipo_question === 'genero') {
        option = genero;
      }
      if (pergunta.tipo_question === 'Serviço') {
        option = servicesAlternativeQuestion;
      }
      if (pergunta.tipo_question === 'Sim e Não') {
        option = yesNoAlternativeQuestion;
      }

      let indexPergunta = (await pergunta.id) - 1;

      let respostaFechada = [null];

      for (let index = 0; index < checked.length; index++) {
        if (checked[index] === true) {
          respostaFechada = [await option[index].texto];
        }
      }

      try {
        resposta[indexPergunta].respostaFechada = respostaFechada;
        setResposta(resposta);
      } catch (error) {
        console.log(error);
      }
    }
    pegarRespostaIcone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  function toggleCheckBoxMultiple(id) {
    let checkBox = [...checked];
    for (let index = 0; index < checked.length; index++) {
      if (index === id - 1) {
        if (checkBox[index] === true) {
          checkBox[index] = false;
        } else {
          checkBox[index] = true;
        }
      }
    }
    setChecked(checkBox);
  }

  function toggleCheckBox(id) {
    let checkBox = [...checked];
    for (let index = 0; index < checked.length; index++) {
      if (index === id - 1) {
        if (checkBox[index] === true) {
          checkBox[index] = false;
        } else {
          checkBox[index] = true;
        }
      } else {
        checkBox[index] = false;
      }
    }
    setChecked(checkBox);
  }

  return (
    <View style={styleQuestion.campo}>
      <Text style={styleQuestion.titulo}>{pergunta.question}</Text>
      {pergunta.tipo_question === 'Sim e Não' && (
        <View style={styleQuestion.checkBoxView}>
          {yesNoAlternativeQuestion.map(item => (
            <View key={item.id} style={styleQuestion.checkBoxContainer}>
              <CheckBox
                title={item.texto}
                checked={checked[item.id - 1]}
                onPress={() => toggleCheckBox(item.id)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon={'checkbox-blank-outline'}
                checkedColor="#55F"
                uncheckedColor="#55F"
                size={30}
              />
            </View>
          ))}
        </View>
      )}
      {pergunta.tipo_question === 'Serviço' && (
        <View style={styleQuestion.checkBoxView}>
          {servicesAlternativeQuestion.map(item => (
            <View key={item.id} style={styleQuestion.checkBoxContainer}>
              <CheckBox
                title={item.texto}
                checked={checked[item.id - 1]}
                onPress={() => toggleCheckBox(item.id)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon={'checkbox-blank-outline'}
                checkedColor="#55F"
                uncheckedColor="#55F"
                size={30}
              />
            </View>
          ))}
        </View>
      )}
      {pergunta.tipo_question === 'Padrão' && (
        <View style={styleQuestion.checkBoxView}>
          {defaultAlternativeQuestion.map(item => (
            <View key={item.id} style={styleQuestion.checkBoxContainer}>
              <CheckBox
                title={item.texto}
                checked={checked[item.id - 1]}
                onPress={() => toggleCheckBox(item.id)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon={'checkbox-blank-outline'}
                checkedColor="#55F"
                uncheckedColor="#55F"
                size={30}
              />
            </View>
          ))}
        </View>
      )}
      {pergunta.tipo_question === 'genero' && (
        <View style={styleQuestion.checkBoxView}>
          {genero.map(item => (
            <View key={item.id} style={styleQuestion.checkBoxContainer}>
              <CheckBox
                title={item.texto}
                checked={checked[item.id - 1]}
                onPress={() => toggleCheckBox(item.id)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon={'checkbox-blank-outline'}
                checkedColor="#55F"
                uncheckedColor="#55F"
                size={30}
              />
            </View>
          ))}
        </View>
      )}
      {(pergunta.tipo_question === 'aberta' ||
        pergunta.tipo_question === 'Padrão' ||
        pergunta.tipo_question === 'genero') && (
        <View>
          <TextInput
            multiline={true}
            onChangeText={setTexto}
            value={texto}
            style={styleQuestion.inputText}
            placeholder="Digite mais informações"
          />
        </View>
      )}
    </View>
  );
}

export default QuestionComponent;
