import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import {LerFormularios} from '../serviços/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  const [respostas, setRespostas] = useState({
    respostas: [],
  });
  const [isCarregadaResposta, setIsCarregadaResposta] = useState(false);

  useEffect(() => {
    async function VerificarRespostasArmazenadas() {
      const resposta = await AsyncStorage.getItem('2');
      if (resposta.length !== 2 && isCarregadaResposta === false) {
        const respostaJson = JSON.parse(resposta);
        setRespostas(respostaJson);
        setIsCarregadaResposta(true);
      } else {
      }
    }
    VerificarRespostasArmazenadas();
  }, [isCarregadaResposta, respostas]);

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
