import {CheckBox} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import stylePage from './style';

function CampoInputFechado() {
  const [SelectedIndex, SetIndex] = React.useState(false);

  return (
    <View style={stylePage.campo}>
      <Text style={stylePage.campoTitulo}>pergunta</Text>
      <View>
        <CheckBox
          title="Sim"
          checked={SelectedIndex === false}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex(false)}
        />
        <CheckBox
          title="Não"
          checked={SelectedIndex === true}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex(true)}
        />
      </View>
    </View>
  );
}

export default CampoInputFechado;
