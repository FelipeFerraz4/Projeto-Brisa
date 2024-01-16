import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SalvarFormularios(formulario) {
  const formularios = JSON.stringify(formulario);
  await AsyncStorage.setItem('1', formularios);
}

export async function LerFormularios() {
  const formularios = await AsyncStorage.getItem('1');
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
  } catch (e) {
    console.log('erro: ' + e);
  }
}

export async function LerRespostas() {
  const respostas = await AsyncStorage.getItem('2');
  const respostasJson = await JSON.parse(respostas);
  // console.log(await respostasJson[0]);
  // console.log(await respostasJson[1]);
  // console.log(await respostasJson[2]);
  // console.log(await respostasJson[3]);
  // console.log(await respostasJson[4]);
  // console.log(await respostasJson[5]);
  return respostasJson;
}
