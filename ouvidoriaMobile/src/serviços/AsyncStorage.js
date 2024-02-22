import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SalvarFormularios(formulario) {
  const formularios = JSON.stringify(formulario);
  await AsyncStorage.setItem('4', formularios);
}

export async function SalvarFormulariosQuestion(question) {
  const questions = JSON.stringify(question);
  await AsyncStorage.setItem('5', questions);
}

export async function LerFormularios() {
  const formularios = await AsyncStorage.getItem('4');
  const formulariosJson = await JSON.parse(formularios);
  return formulariosJson;
}

export async function SalvarRespostas(resposta) {
  try {
    const respostas = JSON.stringify(resposta);
    await AsyncStorage.setItem('2', respostas);
  } catch (e) {
    console.log('erro: ' + e);
  }
}

export async function LerRespostas() {
  const respostas = await AsyncStorage.getItem('2');
  const respostasJson = await JSON.parse(respostas);
  return respostasJson;
}
