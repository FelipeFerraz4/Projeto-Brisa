import React, {useState} from 'react';
import {createContext} from 'react';
import {CarregarFormularios} from '../serviços/CarregarForms';

export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  const [formularioAtual, setFormularioAtual] = useState(0);
  const formularios = CarregarFormularios();
  const valor = 150;
  const [formulario, setFormulario] = useState(formularios[formularioAtual]);

  return (
    <GlobalContext.Provider
      value={{formularioAtual, setFormularioAtual, formulario, setFormulario}}>
      {children}
    </GlobalContext.Provider>
  );
}
