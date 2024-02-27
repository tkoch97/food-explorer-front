import PropTypes from 'prop-types';
import { Container, Form } from './style';
import { useMediaQuery } from "react-responsive";
import { Input } from '../Input';
import { SelectDishType } from '../SelectDishType';
import { DishDescriptionArea } from '../DishDescriptionArea';
// import { useState } from 'react';
import { Button } from '../Button';
import { DeleteDishButton } from '../DeleteDishButton';
import { UploadImage } from '../UploadImage';

export function CreateOrEditDishForm (props) {

  const {type} = props;

  const optionsInSelect = ['Refeição', 'Sobremesa', 'Bebida']

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 365 });

  return (
    <Container fontApplied= "POPPINS_400_MEDIUM">
      <p >
        {type === "create" ? (isDesktop ? 'Adicionar prato' : 'Novo prato') : 'Editar prato'}
      </p>

      <Form>

        <div className='basicDetails'>

          <div className="uploadImageButton">
            <UploadImage labelName='Imagem do prato'
            buttonTitle={type === 'edit' ? 
            (isDesktop ? 'Selecione Imagem' : 'Selecione Imagem para alterá-la') : 'Selecione Imagem'}
            />
          </div>

          <div className="dishNameInput">
            <Input labelName='Nome'
            placeholder='Ex.: Salada Ceasar'
            type='text'
            />
          </div>

          <div className="dishTypeSelect">
            <SelectDishType values={optionsInSelect}/>
          </div>

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

        <div className='actionButtons'>
          <div className="deleteDishButton">
            {type === 'edit' ? <DeleteDishButton title={isVerySmallScreen ? 'Excluir' : 'Excluir Prato'}/> : null}
          </div>
          <div className="saveChangesButton">
            <Button title={isVerySmallScreen ? 'Salvar' : 'Salvar alterações'}/>
          </div>
        </div>

      </Form>
    </Container>
  )
}

CreateOrEditDishForm.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
}