import PropTypes from 'prop-types';
import { Container, Form } from './style';
import { useMediaQuery } from "react-responsive";
import { Input } from '../Input';
import { SelectDishType } from '../SelectDishType';
import { DishDescriptionArea } from '../DishDescriptionArea';
import { useState } from 'react';
import { Button } from '../Button';
import { DeleteDishButton } from '../DeleteDishButton';
import { UploadImage } from '../UploadImage';
import { FieldToInsertDishIngredients } from '../FieldToInsertDishIngredients';
import { TransformToMoneyPattern } from '../../utils/transformToMoneyPattern';
import { PostANewDishToDB } from '../../functions/PostANewDishToDB';
export function CreateOrEditDishForm (props) {

  const {type} = props;

  const optionsInSelect = ['Refeição', 'Sobremesa', 'Bebida']

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 365 });

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('Refeição');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [alertMessageAboutImage, setAlertMessageAboutImage] = useState('');

  const nameDish = document.getElementById('nameDish');
  const ingredientsDish = document.getElementById('ingredientsDish');
  const priceDish = document.getElementById('priceDish');
  const descriptionDish = document.getElementById('descriptionDish');
  const imageDish = document.getElementById('imageDish');
  
  const handleWithChangePrice = (e) => {
    let value = e.currentTarget.value;
    setPrice(TransformToMoneyPattern(value))
  };

  function resetDishInformations() {
    const selectedImageMsg = document.getElementById('selectedImageMsg')

    imageDish.value = '';
    setImage(null);
    selectedImageMsg.innerHTML = '';
    descriptionDish.value = '';
    setDescription('');
    setIngredients([]);
    nameDish.value = '';
    setName('');
    priceDish.value = '';
    setPrice('');
  }
  
  const SendInformationsToPostANewDish = (informationsToCreateANewDish) => {
    const {image, name, ingredients, price, description} = informationsToCreateANewDish

    if(!image) {
      setAlertMessageAboutImage('Selecione uma imagem para o prato')
      alert('Selecione uma imagem para o prato.')
    } else if(name === '') {
      nameDish.focus()
      alert('Insira um nome para o prato');
    } else if (ingredients.length === 0) {
      alert('Informe os ingredientes do prato');
      ingredientsDish.focus()
    } else if (price === '') {
      alert('Informe o preço do prato');
      priceDish.focus()
    } else if (description === '') {
      alert('Escreva uma drescrição para o prato');
      descriptionDish.focus()
    } else {
      PostANewDishToDB(informationsToCreateANewDish);
      resetDishInformations();
    }
  }

  const onImageChange = (file) => {
    setImage(file)
    setAlertMessageAboutImage('')
  }

  const informationsToCreateANewDish = {
    image: image,
    name: name,
    category: category.toLowerCase(),
    ingredients: ingredients,
    price: price,
    description: description,
  }

  const ingredientsAndNewIngredientStates = {
    ingredients: ingredients,
    setIngredients: setIngredients,
    newIngredient: newIngredient,
    setNewIngredient: setNewIngredient,
  }

  return (
    <Container fontApplied= "POPPINS_400_MEDIUM">
      <p >
        {type === "create" ? (isDesktop ? 'Adicionar prato' : 'Novo prato') : 'Editar prato'}
      </p>

      <Form>

        <div className='basicDetails'>

          <div className="uploadImageButton">
            <UploadImage id='imageDish' labelName='Imagem do prato'
            buttonTitle={type === 'edit' ? (isDesktop ? 'Selecione Imagem' : 'Selecione Imagem para alterá-la') : 'Selecione Imagem'}
            onImageChange={onImageChange}
            />
            <p id='alertUserToSelectAnImage'>{alertMessageAboutImage}</p>
          </div>

          <div className="dishNameInput">
            <Input id='nameDish'
            labelName='Nome'
            placeholder='Ex.: Salada Ceasar'
            type='text'
            onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="dishTypeSelect">
            <SelectDishType 
              id='categoryDish' 
              values={optionsInSelect}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

        </div>

        <div className='ingredientsAndPrice'>

          <div className="ingredients">
            <FieldToInsertDishIngredients 
              id='ingredientsDish' 
              statesToCreateTags={ingredientsAndNewIngredientStates}
            />
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
          <DishDescriptionArea 
            id='descriptionDish' 
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className='actionButtons'>
          <div className="deleteDishButton">
            {type === 'edit' ? <DeleteDishButton title={isVerySmallScreen ? 'Excluir' : 'Excluir Prato'}/> : null}
          </div>
          <div className="saveChangesButton">
            <Button 
              title={isVerySmallScreen ? 'Salvar' : 'Salvar alterações'}
              onClick={() => {type === 'edit' ? '' : SendInformationsToPostANewDish(informationsToCreateANewDish)}}
            />
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