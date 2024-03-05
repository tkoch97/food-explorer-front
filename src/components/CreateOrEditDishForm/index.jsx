import PropTypes from 'prop-types';
import { Container, Form } from './style';
import { useMediaQuery } from "react-responsive";
import { Input } from '../Input';
import { SelectDishType } from '../SelectDishType';
import { DishDescriptionArea } from '../DishDescriptionArea';
import { useCallback, useState } from 'react';
import { Button } from '../Button';
import { DeleteDishButton } from '../DeleteDishButton';
import { UploadImage } from '../UploadImage';
import { FieldToInsertDishIngredients } from '../FieldToInsertDishIngredients';
import { TransformToMoneyPattern } from '../../utils/transformToMoneyPattern';
export function CreateOrEditDishForm (props) {

  const {type} = props;

  const optionsInSelect = ['Refeição', 'Sobremesa', 'Bebida']

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 365 });

  const [price, setPrice] = useState('');

  const handleWithChangePrice = useCallback((e) => {
    let value = e.currentTarget.value;
    setPrice(TransformToMoneyPattern(value))
  }, [price]);

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
            <Input id='nameDish'
            labelName='Nome'
            placeholder='Ex.: Salada Ceasar'
            type='text'
            />
          </div>

          <div className="dishTypeSelect">
            <SelectDishType values={optionsInSelect}/>
          </div>

        </div>

        <div className='ingredientsAndPrice'>

          <div className="ingredients">
            <FieldToInsertDishIngredients/>
          </div>

          <div className="price">
            <Input id='priceDish'
              labelName='Preço'
              mask='money'
              onChange={handleWithChangePrice}
              placeholder='R$ 00,00'
              type='text'
            />
          </div>

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