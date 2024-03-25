import { Container, Form } from './style';
import { useMediaQuery } from "react-responsive";
import { Input } from '../Input';
import { SelectDishType } from '../SelectDishType';
import { DishDescriptionArea } from '../DishDescriptionArea';
import { useState } from 'react';
import { Button } from '../Button';
import { UploadImage } from '../UploadImage';
import { FieldToInsertDishIngredients } from '../FieldToInsertDishIngredients';
import { TransformToMoneyPattern } from '../../utils/transformToMoneyPattern';
import { PostANewDishToDB } from '../../functions/PostANewDishToDB';
export function CreateDishForm () {

  const optionsInSelect = ['Refeição', 'Sobremesa', 'Bebida']

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [alertMessageAboutImage, setAlertMessageAboutImage] = useState('');

  const nameDish = document.getElementById('nameDish');
  const ingredientsDish = document.getElementById('ingredientsDish');
  const priceDish = document.getElementById('priceDish');
  const descriptionDish = document.getElementById('descriptionDish');
  const imageDish = document.getElementById('imageDish');
  const categoryDish = document.getElementById('categoryDish');
  
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
    const {image, name, ingredients, price, description, category} = informationsToCreateANewDish

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
    } else if(category === '') {
      alert('Selecione uma categoria para o prato.');
      categoryDish.focus()
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
        {isDesktop ? 'Adicionar prato' : 'Novo prato'}
      </p>

      <Form>

        <div className='basicDetails'>

          <div className="uploadImageButton">
            <UploadImage id='imageDish' labelName='Imagem do prato'
            buttonTitle='Selecione Imagem'
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
              placeholder='Selecionar'
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

        <div className='actionButton'>
          <div className="saveButton">
            <Button 
              title='Salvar prato'
              onClick={() => {SendInformationsToPostANewDish(informationsToCreateANewDish)}}
            />
          </div>
        </div>

      </Form>
    </Container>
  )
}
