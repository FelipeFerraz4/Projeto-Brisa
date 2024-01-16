import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CarregarFormularios} from './CarregarForms';

export async function SalvarFormularios() {
  const formularios = JSON.stringify(CarregarFormularios());
  await AsyncStorage.setItem('1', formularios);
}

export async function LerFormularios() {
  const formularios = await AsyncStorage.getItem('1');
  const formulariosJson = await JSON.parse(formularios);
  return formulariosJson;
}
