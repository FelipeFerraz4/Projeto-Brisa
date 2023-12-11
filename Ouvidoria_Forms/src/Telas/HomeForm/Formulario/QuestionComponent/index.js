import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {CheckBox} from '@rneui/themed';

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
  const [selectedIndex, setIndex] = useState(-1);
  return (
    <View style={styleQuestion.campo}>
      <Text style={styleQuestion.titulo}>{titulo}</Text>
      {camposFechado !== 0 && (
        <View style={styleQuestion.checkBoxView}>
          {resposta.map(item => (
            <CheckBox
              key={item.id}
              checked={selectedIndex === item.id - 1}
              onPress={() => setIndex(item.id - 1)}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              title={item.texto}
              containerStyle={styleQuestion.checkBox}
            />
          ))}
        </View>
      )}
      {tipo === 'aberta' && (
        <View>
          <TextInput
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
