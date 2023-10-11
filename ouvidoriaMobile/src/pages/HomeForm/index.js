import React from 'react';
import RomariaForm from './RomariaForm';
import OuvidoriaIntineranteForm from './OuvidoriaIntineranteForm';

function HomeForm() {
  const idForm = 1;
  if (idForm === '1') {
    return <RomariaForm />;
  } else {
    return <OuvidoriaIntineranteForm />;
  }
}

export default HomeForm;
