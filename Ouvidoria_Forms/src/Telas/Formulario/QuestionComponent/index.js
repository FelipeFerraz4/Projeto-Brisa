import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import styleQuestion from './style';
import {CheckBox} from '@rneui/themed';

function QuestionComponent({pergunta, resposta, setResposta}) {
  const [texto, setTexto] = useState('');
  const [checked, setChecked] = useState([false, false, false, false, false]);

  useEffect(() => {
    async function pegarRespostaTexto() {
      let index = (await pergunta.id) - 1;
      resposta[index].respostaAberta = texto;
      setResposta(resposta);
    }
    pegarRespostaTexto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);

  useEffect(() => {
    async function pegarRespostaIcone() {
      let indexPergunta = (await pergunta.id) - 1;
      let respostaFechada = [];
      for (let index = 0; index < checked.length; index++) {
        if (checked[index] === true) {
          respostaFechada.push(await pergunta.option[index].texto);
        }
      }
      resposta[indexPergunta].respostaFechada = respostaFechada;
      setResposta(resposta);
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
      <Text style={styleQuestion.titulo}>{pergunta.texto}</Text>
      {pergunta.quantidadeCamposFechados !== 0 && (
        <View style={styleQuestion.checkBoxView}>
          {pergunta.option.map(item => (
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
      {pergunta.tipoPergunta === 'aberta' && (
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
