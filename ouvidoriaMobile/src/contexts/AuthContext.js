import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext, useEffect} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [usuario, setUsuario] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    async function VerificarIsLogged() {
      const estado = await AsyncStorage.getItem('3');
      if (estado !== undefined) {
        if (estado === 'true') {
          setIsLogged(true);
        }
      }
    }

    VerificarIsLogged();
  });

  async function SalvarLogin(estado) {
    await AsyncStorage.setItem('3', estado);
  }

  async function SalvarLogoff() {
    setIsLogged(false);
    SalvarLogin('false');
  }

  function login(email, senha) {
    if (email === 'admin@email.com' && senha === 'senha') {
      setUsuario({
        nome: 'Ouvidoria',
        email: email,
      });
      setIsLogged(true);
      SalvarLogin('true');
      return 'sucesso';
    } else {
      return 'Email ou senha incorretos';
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        isLogged,
        SalvarLogoff,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
