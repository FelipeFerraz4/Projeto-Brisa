import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Box from '../../../../assets/checkbox/boxBlue.png';
import CheckBox from '../../../../assets/checkbox/checkboxBlue.png';
import styleComponent from '../style';

function CheckBoxMutiplaEscolha({campo: dados, pergunta: titulo}) {
  const [Figura1, SetFigura1] = React.useState(Box);
  const [Figura2, SetFigura2] = React.useState(Box);
  const [Figura3, SetFigura3] = React.useState(Box);
  const [Figura4, SetFigura4] = React.useState(Box);
  const [Figura5, SetFigura5] = React.useState(Box);

  return (
    <View style={styleComponent.campo}>
      <Text style={styleComponent.campoTitulo}>{titulo}</Text>
      <View style={styleComponent.checkBox}>
        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura1 === Box) {
              SetFigura1(CheckBox);
            } else {
              SetFigura1(Box);
            }
          }}>
          <Image source={Figura1} />
          <Text style={styleComponent.boxTexto}>{dados[0].texto}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura2 === Box) {
              SetFigura2(CheckBox);
            } else {
              SetFigura2(Box);
            }
          }}>
          <Image source={Figura2} />
          <Text style={styleComponent.boxTexto}>{dados[1].texto}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura3 === Box) {
              SetFigura3(CheckBox);
            } else {
              SetFigura3(Box);
            }
          }}>
          <Image source={Figura3} />
          <Text style={styleComponent.boxTexto}>{dados[2].texto}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura4 === Box) {
              SetFigura4(CheckBox);
            } else {
              SetFigura4(Box);
            }
          }}>
          <Image source={Figura4} />
          <Text style={styleComponent.boxTexto}>{dados[3].texto}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleComponent.box}
          onPress={() => {
            if (Figura5 === Box) {
              SetFigura5(CheckBox);
            } else {
              SetFigura5(Box);
            }
          }}>
          <Image source={Figura5} />
          <Text style={styleComponent.boxTexto}>{dados[4].texto}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CheckBoxMutiplaEscolha;
