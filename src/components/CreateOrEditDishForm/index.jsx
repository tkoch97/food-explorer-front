import PropTypes from 'prop-types';
import { Container, Form } from './style';
import { useMediaQuery } from "react-responsive";
import { Input } from '../Input';
import { SelectDishType } from '../SelectDishType';
import { DishDescriptionArea } from '../DishDescriptionArea';
import { useState } from 'react';

export function CreateOrEditDishForm (props) {

  const {type} = props;

  const optionsInSelect = ['Refeição', 'Sobremesa', 'Bebida']

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container fontApplied= "POPPINS_400_MEDIUM">
      <p >
        {type === "create" ? (isDesktop ? 'Adicionar prato' : 'Novo prato') : 'Editar prato'}
      </p>

      <Form>

        <div className='basicDetails'>
          <Input labelName='Nome'
          placeholder='Ex.: Salada Ceasar'
          type='text'
          />

          <SelectDishType values={optionsInSelect}/>
        </div>

        <div className='ingredientsAndPrice'>
          <Input className='priceInput'
            labelName='Preço'
            placeholder='R$ 00,00'
            type='number'
          />
        </div>

        <div className='additionalInformations'>
          <DishDescriptionArea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
        </div>

      </Form>
    </Container>
  )
}

CreateOrEditDishForm.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
}