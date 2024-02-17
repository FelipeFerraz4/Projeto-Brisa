export function questionsForms(formsQuestion, id) {
  const questionForm = formsQuestion.filter(forms => forms.form_id === id + 1);
  for (let i = 0; i < questionForm.length; i++) {
    questionForm[i].id = i + 1;
  }
  // console.log(questionForm);
  // console.log('aqui');
  return questionForm;
}

export const questionHeader = [
  {
    id: 1,
    form_id: 1,
    question: 'Nome:',
    tipo_question: 'aberta',
  },
  {
    id: 2,
    form_id: 1,
    question: 'Endereço',
    tipo_question: 'aberta',
  },
  {
    id: 3,
    form_id: 1,
    question: 'Data de Nascimento',
    tipo_question: 'aberta',
  },
  {
    id: 4,
    form_id: 1,
    question: 'Contato',
    tipo_question: 'aberta',
  },
  {
    id: 5,
    form_id: 1,
    question: 'Gênero:',
    tipo_question: 'genero',
  },
];

export const questionFooter = [
  {
    id: 1,
    form_id: 1,
    question:
      'Este espaço é seu! Registre aqui sugestões, reclamações, elogios, críticas...',
    tipo_question: 'aberta',
  },
];

export function RespostaHeader() {
  let campoResposta = [];
  for (let i = 0; i < questionHeader.length; i++) {
    campoResposta.push({
      id: i + 1,
      respostaFechada: [],
      respostaAberta: '',
    });
  }
  return campoResposta;
}

export function RespostaBordy(size) {
  let campoResposta = [];
  for (let i = 1; i <= size; i++) {
    campoResposta.push({
      id: i + questionHeader.length,
      respostaFechada: [],
      respostaAberta: '',
    });
  }
  return campoResposta;
}

export function RespostaFooter(size) {
  let campoResposta = [
    {
      id: questionHeader.length + size + 1,
      respostaFechada: [],
      respostaAberta: '',
    },
  ];
  return campoResposta;
}

export const genero = [
  {
    id: 1,
    texto: 'Masculino',
  },
  {
    id: 2,
    texto: 'Feminino',
  },
  {
    id: 3,
    texto: 'Não se identifica com nenhum gênero',
  },
];

export const defaultAlternativeQuestion = [
  {
    id: 1,
    texto: 'Ótimo',
  },
  {
    id: 2,
    texto: 'Bom',
  },
  {
    id: 3,
    texto: 'Regular',
  },
  {
    id: 4,
    texto: 'Ruim',
  },
  {
    id: 5,
    texto: 'Péssimo',
  },
];

export const servicesAlternativeQuestion = [
  {
    id: 1,
    texto: 'Limpeza Pública',
  },
  {
    id: 2,
    texto: 'Segurança',
  },
  {
    id: 3,
    texto: 'Infraestrutura',
  },
  {
    id: 4,
    texto: 'Turismo',
  },
  {
    id: 5,
    texto: 'Saúde',
  },
];

export const yesNoAlternativeQuestion = [
  {
    id: 1,
    texto: 'Sim',
  },
  {
    id: 2,
    texto: 'Não',
  },
];
