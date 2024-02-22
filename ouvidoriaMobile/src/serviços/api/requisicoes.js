import axios from 'axios';
import api from './url';

export async function getFormularios() {
  try {
    const resultado = await api.get('/forms');
    return await resultado.data;
  } catch (error) {
    return error;
  }
}

export async function getFormulariosQuestao() {
  try {
    const resultado = await api.get('/questions');
    return resultado.data;
  } catch (error) {
    return error;
  }
}

export function tratarErroRequisicaoQuestao(questionJson) {
  const questionString = questionJson.toString() + '}';
  const questions = JSON.parse(questionString);
  return questions;
}

export async function salvarResposta(
  idFormularioResposta,
  dataResposta,
  servidorResposta,
  resposta,
) {
  try {
    const data = await {
      idFormulario: idFormularioResposta,
      data: dataResposta,
      servidor: servidorResposta,
      respostas: resposta,
    };

    await api.post('/response', data);
    return 'sucesso';
  } catch (error) {
    return error;
  }
}

export async function salvarRespostaCodigo() {
  try {
    await api.post('/response', {
      idFormulario: 1,
      data: '12/02/2024',
      servidor: 'Felipe',
      respostas: [
        {
          id: 1,
          respostaFechada: [],
          respostaAberta: 'Livia',
        },
        {
          id: 2,
          respostaFechada: [],
          respostaAberta: 'Bairro Centro',
        },
        {
          id: 3,
          respostaFechada: [],
          respostaAberta: '21',
        },
        {
          id: 4,
          respostaFechada: [],
          respostaAberta: 'livia@gmail.com',
        },
        {
          id: 5,
          respostaFechada: ['feminino'],
          respostaAberta: '',
        },
        {
          id: 6,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 7,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 8,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 9,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 10,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 11,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 12,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
        {
          id: 13,
          respostaFechada: ['Ótimo'],
          respostaAberta: 'Por motivo de desempenho',
        },
      ],
    });
    return 'sucesso';
  } catch (error) {
    return error;
  }
}
