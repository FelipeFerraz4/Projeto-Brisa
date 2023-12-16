import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styleQuestion from './style';

function QuestionComponent({
  option: resposta,
  quantidadeCamposFechados: camposFechado,
  texto: titulo,
  tipoPergunta: tipo,
  hookResposta,
  hookSetResposta,
  hookTexto,
  hookSetTexto,
}) {
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

  return (
    <View style={styleQuestion.campo}>
      <Text style={styleQuestion.titulo}>{titulo}</Text>
      {camposFechado !== 0 && (
        <View style={styleQuestion.checkBoxView}>
          {resposta.map(item => (
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
      {tipo === 'aberta' && (
        <View>
          <TextInput
            multiline={true}
            onChangeText={hookSetTexto}
            value={hookTexto}
            style={styleQuestion.inputText}
            placeholder="Digite mais informações"
          />
        </View>
      )}
    </View>
  );
}

export default QuestionComponent;
