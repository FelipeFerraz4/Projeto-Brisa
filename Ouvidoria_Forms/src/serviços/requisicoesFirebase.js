import {auth} from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

export async function logar(email, senha) {
  const resultado = await signInWithEmailAndPassword(auth, email, senha)
    .then(dadosDoUsuario => {
      console.log(dadosDoUsuario);
      return 'sucesso';
    })
    .catch(erro => {
      console.log(erro);
      return 'Erro no login';
    });
  return resultado;
}
