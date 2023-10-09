import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Box from '../../../../assets/box.png';
import CheckBox from '../../../../assets/checkbox.png';
import styleComponent from '../style';

function CheckBox2({campo: dados, pergunta: texto}) {
  const [Figura1, SetFigura1] = React.useState(Box);
  const [Figura2, SetFigura2] = React.useState(Box);

  return (
    <View style={styleComponent.campo}>
      <Text style={styleComponent.campoTitulo}>{texto}</Text>
      <View style={styleComponent.checkBox}>
        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura1 === Box) {
              SetFigura1(CheckBox);
              SetFigura2(Box);
            } else {
              SetFigura1(Box);
            }
          }}>
          <Image source={Figura1} />
          <Text>{dados[0].texto}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura2 === Box) {
              SetFigura1(Box);
              SetFigura2(CheckBox);
            } else {
              SetFigura2(Box);
            }
          }}>
          <Image source={Figura2} />
          <Text>{dados[1].texto}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CheckBox2;
