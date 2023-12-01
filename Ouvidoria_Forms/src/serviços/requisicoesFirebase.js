import {auth} from '../config/firebase';
import {signInWithEmailAndPassword, AuthErrorCodes} from 'firebase/auth';

function errosFirebase(erro) {
  let mensagem = '';
  // switch(erro.code) {
  //     case AuthErrorCodes.
  // }
}

export async function logar(email, senha) {
  const resultado = await signInWithEmailAndPassword(auth, email, senha)
    .then(dadosDoUsuario => {
      console.log(dadosDoUsuario);
      return 'sucesso';
    })
    .catch(erro => {
      console.log(erro);
      //   return errosFirebase(erro);
      return 'Erro no login';
    });
  return resultado;
}
