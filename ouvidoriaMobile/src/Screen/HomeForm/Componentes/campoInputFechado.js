import {CheckBox} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import stylePage from './style';

function CampoInputFechado({pergunta: texto}) {
  const [SelectedIndex, SetIndex] = React.useState('0');

  return (
    <View style={stylePage.campo}>
      <Text style={stylePage.campoTitulo}>{texto}</Text>
      <View>
        <CheckBox
          title="Ótimo"
          checked={SelectedIndex === '1'}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex('1')}
        />
        <CheckBox
          title="Bom"
          checked={SelectedIndex === '2'}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex('2')}
        />
        <CheckBox
          title="Regular"
          checked={SelectedIndex === '3'}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex('3')}
        />
        <CheckBox
          title="Ruim"
          checked={SelectedIndex === '4'}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex('4')}
        />
        <CheckBox
          title="Péssimo"
          checked={SelectedIndex === '5'}
          checkedIcon="dot-circle-0"
          uncheckedIcon="circle-o"
          onPress={() => SetIndex('5')}
        />
      </View>
    </View>
  );
}

export default CampoInputFechado;
