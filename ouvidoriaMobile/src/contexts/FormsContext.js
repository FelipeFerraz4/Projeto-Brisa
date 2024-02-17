import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

export const FormsContext = createContext({});

export function FormsProvider({children}) {
  const [forms, setForms] = useState({
    data: [],
  });

  const [formsQuestion, setFormsQuestion] = useState({
    date: [
      {
        id: 1,
        form_id: 1,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a infraestrutura municipal?',
      },
      {
        id: 2,
        form_id: 1,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a limpeza pública municipal?',
      },
      {
        id: 3,
        form_id: 1,
        tipo_question: 'Padrão',
        question:
          'Qual sua opinião sobre a prestação dos serviços ofertados pela saúde?',
      },
      {
        id: 4,
        form_id: 1,
        tipo_question: 'Padrão',
        question:
          'Como você avalia o atendimento recebido pelos servidores da saúde?',
      },
      {
        id: 5,
        form_id: 1,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a educação no âmbito municipal?',
      },
      {
        id: 6,
        form_id: 1,
        tipo_question: 'Padrão',
        question:
          'Como você avalia o atendimento recebido pelos servidores da educação?',
      },
      {
        id: 7,
        form_id: 1,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a segurança pública no município?',
      },
      {
        id: 8,
        form_id: 1,
        tipo_question: 'Padrão',
        question: 'Qual sua avaliação sobre a gestão municipal?',
      },
      {
        id: 9,
        form_id: 2,
        tipo_question: 'Padrão',
        question: 'Como avalia as condições de hospedagem na Cidade?',
      },
      {
        id: 10,
        form_id: 2,
        tipo_question: 'Sim e Não',
        question:
          'Os pontos turísticos da cidade são fáceis de serem localizados?',
      },
      {
        id: 11,
        form_id: 2,
        tipo_question: 'Sim e Não',
        question: 'Você utilizou algum serviço público municipal?',
      },
      {
        id: 12,
        form_id: 2,
        tipo_question: 'Padrão',
        question: 'Como você avalia o serviço público utilizado?',
      },
      {
        id: 13,
        form_id: 2,
        tipo_question: 'Serviço',
        question:
          'Quais serviços públicos realizados pelo município você destaca na Cidade?',
      },
      {
        id: 14,
        form_id: 2,
        tipo_question: 'Serviço',
        question:
          'Qual serviço público deve ser melhorado no município de Juazeiro do Norte/CE para atender as necessidades dos romeiros?',
      },
      {
        id: 15,
        form_id: 3,
        tipo_question: 'Padrão',
        question: 'Qual serviço público você utilizou ?',
      },
      {
        id: 16,
        form_id: 3,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a infraestrutura municipal ?',
      },
      {
        id: 17,
        form_id: 3,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a limpeza pública municipal ?',
      },
      {
        id: 18,
        form_id: 3,
        tipo_question: 'Padrão',
        question:
          'Qual sua opinião sobre a prestação dos serviços ofertados pela saúde ?',
      },
      {
        id: 19,
        form_id: 3,
        tipo_question: 'Padrão',
        question:
          'Como você avalia o atendimento recebido pelos servidores da saúde ?',
      },
      {
        id: 20,
        form_id: 3,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a educação no âmbito municipal ?',
      },
      {
        id: 21,
        form_id: 3,
        tipo_question: 'Padrão',
        question:
          'Como você avalia o atendimento recebido pelos servidores da educação ?',
      },
      {
        id: 22,
        form_id: 3,
        tipo_question: 'Padrão',
        question: 'Qual sua opinião sobre a segurança pública no município ?',
      },
      {
        id: 23,
        form_id: 3,
        tipo_question: 'Padrão',
        question: 'Qual sua avaliação sobre a gestão municipal ?',
      },
    ],
  });

  //   useEffect(() => {
  //     async function CriarformularioCompleto() {
  //       const formsQuestion = await formsQuestion.data.filter(
  //         item => item.form_id === formularioAtual,
  //       );
  //     }
  //     CriarformularioCompleto();
  //   }, [formsQuestion.date, formularioAtual]);

  return (
    <FormsContext.Provider
      value={{
        forms,
        setForms,
      }}>
      {children}
    </FormsContext.Provider>
  );
}
