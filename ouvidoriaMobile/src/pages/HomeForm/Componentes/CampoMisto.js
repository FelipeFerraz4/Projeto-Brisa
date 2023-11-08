import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styleComponent from './style';
import Box from '../../../assets/checkbox/boxBlue.png';
import CheckBox from '../../../assets/checkbox/checkboxBlue.png';

function CampoInputAberto({
  quantityChackBox: quantity,
  pergunta: texto,
  option: dados,
}) {
  const [Figura1, SetFigura1] = React.useState(Box);
  const [Figura2, SetFigura2] = React.useState(Box);
  const [Figura3, SetFigura3] = React.useState(Box);
  const [Figura4, SetFigura4] = React.useState(Box);
  const [Figura5, SetFigura5] = React.useState(Box);
  const [Texto, SetTexto] = useState('');

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
              if (dados[2] != null) {
                SetFigura3(Box);
              }
              if (dados[3]) {
                SetFigura4(Box);
              }
              if (dados[4]) {
                SetFigura5(Box);
              }
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
              SetFigura1(Box);
              SetFigura2(CheckBox);
              if (dados[2]) {
                SetFigura3(Box);
              }
              if (dados[3]) {
                SetFigura4(Box);
              }
              if (dados[4]) {
                SetFigura5(Box);
              }
            } else {
              SetFigura2(Box);
            }
          }}>
          <Image source={Figura2} />
          <Text style={styleComponent.boxTexto}>{dados[1].texto}</Text>
        </TouchableOpacity>

        {dados[2] && (
          <TouchableOpacity
            style={styleComponent.box}
            onPress={() => {
              if (Figura3 === Box) {
                SetFigura1(Box);
                SetFigura2(Box);
                SetFigura3(CheckBox);
                if (dados[3]) {
                  SetFigura4(Box);
                }
                if (dados[4]) {
                  SetFigura5(Box);
                }
              } else {
                SetFigura3(Box);
              }
            }}>
            <Image source={Figura3} />
            <Text style={styleComponent.boxTexto}>{dados[2].texto}</Text>
          </TouchableOpacity>
        )}

        {dados[3] && (
          <TouchableOpacity
            style={styleComponent.box}
            onPress={() => {
              if (Figura4 === Box) {
                SetFigura1(Box);
                SetFigura2(Box);
                SetFigura3(Box);
                SetFigura4(CheckBox);
                if (dados[4]) {
                  SetFigura5(Box);
                }
              } else {
                SetFigura3(Box);
              }
            }}>
            <Image source={Figura4} />
            <Text style={styleComponent.boxTexto}>{dados[3].texto}</Text>
          </TouchableOpacity>
        )}

        {dados[4] && (
          <TouchableOpacity
            style={styleComponent.box}
            onPress={() => {
              if (Figura5 === Box) {
                SetFigura1(Box);
                SetFigura2(Box);
                SetFigura3(Box);
                SetFigura4(Box);
                SetFigura5(CheckBox);
              } else {
                SetFigura5(Box);
              }
            }}>
            <Image source={Figura5} />
            <Text style={styleComponent.boxTexto}>{dados[4].texto}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TextInput
          onChangeText={SetTexto}
          value={Texto}
          style={styleComponent.inputText}
          placeholder="Digite mais informações"
        />
      </View>
    </View>
  );
}

export default CampoInputAberto;
