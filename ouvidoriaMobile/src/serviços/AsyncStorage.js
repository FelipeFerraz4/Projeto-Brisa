import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SalvarFormularios(formulario) {
  // console.log(formulario);
  // const resultado = await AsyncStorage.getItem('4');
  // console.log('Async2:' + resultado);
  const formularios = JSON.stringify(formulario);
  await AsyncStorage.setItem('4', formularios);
}

export async function SalvarFormulariosQuestion(question) {
  // console.log(question);
  // const resultado = await AsyncStorage.getItem('4');
  // console.log('Async2:' + resultado);
  const questions = JSON.stringify(question);
  await AsyncStorage.setItem('5', questions);
}

export async function LerFormularios() {
  const formularios = await AsyncStorage.getItem('4');
  const formulariosJson = await JSON.parse(formularios);
  // console.log(await formulariosJson[0]);
  // console.log(await formulariosJson[1]);
  return formulariosJson;
}

export async function SalvarRespostas(resposta) {
  try {
    // console.log(resposta);
    const respostas = JSON.stringify(resposta);
    await AsyncStorage.setItem('2', respostas);
    // const resultado = await AsyncStorage.getItem('2');
    // console.log(resultado);
  } catch (e) {
    console.log('erro: ' + e);
  }
}

export async function LerRespostas() {
  const respostas = await AsyncStorage.getItem('2');
  const respostasJson = await JSON.parse(respostas);
  // console.log(await respostasJson);
  // console.log(await respostasJson[1]);
  // console.log(await respostasJson[2]);
  // console.log(await respostasJson[3]);
  // console.log(await respostasJson[4]);
  // console.log(await respostasJson[5]);
  return respostasJson;
}
