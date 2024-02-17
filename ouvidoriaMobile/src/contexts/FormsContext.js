import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

export const FormsContext = createContext({});

export function FormsProvider({children}) {
  const [forms, setForms] = useState({});
  const [formsStatus, setFormsStatus] = useState(false);

  const [formsQuestion, setFormsQuestion] = useState({});
  const [formsQuestionStatus, setFormsQuestionStatus] = useState(false);

  useEffect(() => {
    async function GetFormulariosAsyncStorage() {
      const formulariosNomesString = await AsyncStorage.getItem('4');
      console.log(formulariosNomesString);
      if (formulariosNomesString.length !== 2 && formsStatus === false) {
        const formulariosNomesJson = JSON.parse(formulariosNomesString);
        console.log(formulariosNomesJson);
        setForms(formulariosNomesJson);
        setFormsStatus(true);
      }
    }
    GetFormulariosAsyncStorage();
  }, [formsStatus]);

  useEffect(() => {
    async function GetFormsQuestionAsyncStorage() {
      const formulariosQuestionsString = await AsyncStorage.getItem('5');
      if (
        formulariosQuestionsString.length !== 2 &&
        formsQuestionStatus === false
      ) {
        const formulariosQuestionJson = JSON.parse(formulariosQuestionsString);
        setFormsQuestion(formulariosQuestionJson);
        setFormsQuestionStatus(true);
      }
    }
    GetFormsQuestionAsyncStorage();
  }, [formsQuestionStatus]);

  return (
    <FormsContext.Provider
      value={{
        forms,
        setForms,
        formsQuestion,
        setFormsQuestion,
      }}>
      {children}
    </FormsContext.Provider>
  );
}
