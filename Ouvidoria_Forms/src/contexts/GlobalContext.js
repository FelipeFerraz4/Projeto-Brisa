import React, {useState} from 'react';
import {createContext} from 'react';
import {
  CarregarFormularios,
  CarregarRespostas,
} from '../serviços/CarregarForms';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  const [formularioAtual, setFormularioAtual] = useState(0);
  const formularios = CarregarFormularios();
  const [formulario, setFormulario] = useState(formularios[formularioAtual]);
  const resposta = CarregarRespostas();
  const [respostas, setRespostas] = useState(resposta);

  return (
    <GlobalContext.Provider
      value={{
        formularioAtual,
        setFormularioAtual,
        formulario,
        setFormulario,
        respostas,
        setRespostas,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
