import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styleQuestion from './style';

function QuestionComponent({pergunta, resposta, setResposta}) {
  let icones = [
    {
      id: 1,
      iconStatus: 'offIcone',
    },
    {
      id: 2,
      iconStatus: 'offIcone',
    },
    {
      id: 3,
      iconStatus: 'offIcone',
    },
    {
      id: 4,
      iconStatus: 'offIcone',
    },
    {
      id: 5,
      iconStatus: 'offIcone',
    },
  ];
  const [figura, setFigura] = useState(icones);
  const [texto, setTexto] = useState('');

  function onIcone(id) {
    console.log(id);
    let statusIcone = figura[id - 1].iconStatus;
    if (statusIcone === 'offIcone') {
      icones[id - 1].iconStatus = 'onIcone';
      setFigura(icones);
    } else {
      icones[id - 1].iconStatus = 'offIcone';
      setFigura(icones);
    }
  }

  useEffect(() => {
    async function pegarRespostaTexto() {
      let index = (await pergunta.id) - 1;
      // console.log(index);
      // console.log(resposta[index].respostaAberta);
      resposta[index].respostaAberta = texto;
      setResposta(resposta);
    }
    pegarRespostaTexto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);

  useEffect(() => {
    async function pegarRespostaIcone() {
      let index = (await pergunta.id) - 1;
      let respostaFechada = [];
      for (let index = 0; index < figura.length; index++) {
        // console.log(figura[index].id);
        // console.log(figura[index].iconStatus);
        if (figura[index].iconStatus === 'onIcone') {
          respostaFechada.push(await pergunta.option[index].texto);
        }
      }
      console.log(respostaFechada);
      // console.log(figura);
      // console.log(index);
      // console.log(resposta[index].respostaFechada);
      resposta[index].respostaFechada = respostaFechada;
      setResposta(resposta);
    }
    pegarRespostaIcone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figura]);

  return (
    <View style={styleQuestion.campo}>
      <Text style={styleQuestion.titulo}>{pergunta.texto}</Text>
      {pergunta.quantidadeCamposFechados !== 0 && (
        <View style={styleQuestion.checkBoxView}>
          {pergunta.option.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styleQuestion.checkBoxContainer}
              onPress={() => onIcone(item.id)}>
              {figura[item.id - 1].iconStatus === 'offIcone' && (
                <Icon name="checkbox-blank-outline" size={30} color={'#55F'} />
              )}
              {figura[item.id - 1].iconStatus !== 'offIcone' && (
                <Icon name="checkbox-marked" size={30} color={'#55F'} />
              )}
              <Text>{item.texto}</Text>
            </TouchableOpacity>
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
