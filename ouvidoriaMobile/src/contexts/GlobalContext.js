import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import {
  CarregarRespostas,
  CarregarFormularios,
} from '../serviços/CarregarForms';
import {
  LerFormularios,
  LerRespostas,
  SalvarFormularios,
  SalvarRespostas,
} from '../serviços/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  // SalvarFormularios(CarregarFormularios());
  // SalvarRespostas(CarregarRespostas());
  const [respostas, setRespostas] = useState({
    respostas: [],
  });
  // console.log(respostas);
  const [isCarregadaResposta, setIsCarregadaResposta] = useState(false);

  useEffect(() => {
    async function VerificarRespostasArmazenadas() {
      const resposta = await AsyncStorage.getItem('2');
      // console.log(respostas.respostas.length);
      // console.log(resposta);
      if (resposta.length !== 2 && isCarregadaResposta === false) {
        const respostaJson = JSON.parse(resposta);
        // console.log(respostaJson);
        // let lista = [respostaJson];
        setRespostas(respostaJson);
        setIsCarregadaResposta(true);
        // console.log('um' + respostas);
        // setRespostas()
      } else {
        // console.log('dois' + respostas);
      }
    }
    VerificarRespostasArmazenadas();
  }, [isCarregadaResposta, respostas]);
  // console.log('aqui' + respostas);

  const [respostaNovas, setRespostaNovas] = useState(false);
  const [formularioAtual, setFormularioAtual] = useState(0);
  const formularios = LerFormularios();
  const [formulario, setFormulario] = useState(formularios[formularioAtual]);
  const [servidor, setServidor] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        formularioAtual,
        setFormularioAtual,
        formulario,
        setFormulario,
        respostas,
        setRespostas,
        servidor,
        setServidor,
        respostaNovas,
        setRespostaNovas,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
