/*import {FormView} from '../FormView/FormView'
export default function AllForms() {
    const lista = [
        {
            imgOuvidoria: "assets/imgForm.jpeg",
            title: "Romaria",
            subtitle: "Formulário Romaria"
        },
        {
            imgOuvidoria: "assets/imgForm.jpeg",
            title: "Ouvidoria",
            subtitle: "Formunlário da ouvidoria"
        }
    ]
    return(
        <>
           
                <div  >
                    {
                        lista.map((item, index) =>
                            <FormView
                                key={index}
                                imgOuvidoria={item.icon}
                                title={item.title}
                                subtitle={item.subtitle} />
                        )
                    }
                </div>
        </>
    )
}
*/
import React from 'react';
import { View, ScrollView } from 'react-native';
import FormView from '../FormView/FormView';

export const AllForms = () => {
  const lista = [
    {
      imgOuvidoria: require('../AllForms/imgForm.jpeg'),
      title: 'Romaria',
      subtitle: 'Formulário Romaria',
    },
    {
      imgOuvidoria: require('../AllForms/imgForm.jpeg'),
      title: 'Ouvidoria',
      subtitle: 'Formulário da Ouvidoria',
    },
  ];

  return (
    <ScrollView>
      {lista.map((item, index) => (
        <FormView
          key={index}
          imgOuvidoria={item.imgOuvidoria}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </ScrollView>
  );
};

export default AllForms;
