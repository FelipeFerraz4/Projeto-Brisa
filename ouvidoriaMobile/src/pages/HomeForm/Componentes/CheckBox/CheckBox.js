import React from 'react';
import CheckBox5 from './CheckBox5';
import CheckBox3 from './CheckBox3';
import CheckBox2 from './CheckBox2';
import CheckBoxMutiplaEscolha from './CheckBoxMutiplaEscolha';

function CheckBox({
  quantityChackBox: quantity,
  pergunta: texto,
  option: dados,
}) {
  if (quantity === 5) {
    return <CheckBox5 campo={dados} pergunta={texto} />;
  } else {
    if (quantity === 3) {
      return <CheckBox3 campo={dados} pergunta={texto} />;
    } else {
      if (quantity === 2) {
        return <CheckBox2 campo={dados} pergunta={texto} />;
      } else {
        return <CheckBoxMutiplaEscolha campo={dados} pergunta={texto} />;
      }
    }
  }
}

export default CheckBox;
