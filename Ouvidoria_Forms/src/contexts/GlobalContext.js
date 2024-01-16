import React, {useState} from 'react';
import {createContext} from 'react';
import {
  CarregarFormularios,
  CarregarRespostas,
} from '../serviços/CarregarForms';
import {LerFormularios, SalvarFormularios} from '../serviços/AsyncStorage';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  SalvarFormularios();
  const [respostaNovas, setRespostaNovas] = useState(false);
  const [formularioAtual, setFormularioAtual] = useState(0);
  const formularios = LerFormularios();
  const [formulario, setFormulario] = useState(formularios[formularioAtual]);
  const resposta = CarregarRespostas();
  const [respostas, setRespostas] = useState(resposta);
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
