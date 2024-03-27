import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Form } from './style';
import { useMediaQuery } from "react-responsive";
import { Input } from '../Input';
import { SelectDishType } from '../SelectDishType';
import { DishDescriptionArea } from '../DishDescriptionArea';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { DeleteDishButton } from '../DeleteDishButton';
import { UploadImage } from '../UploadImage';
import { FieldToInsertDishIngredients } from '../FieldToInsertDishIngredients';
import { TransformToMoneyPattern } from '../../utils/transformToMoneyPattern';
import { UpdateADishInDB } from '../../functions/UpdateADishInDB';

export function EditDishForm () {

  const params = useParams();

  const [dishData, setDishData] = useState();
  const navigate = useNavigate();

  useEffect( () =>  {
    async function fetchDish() {
      const response = await api.get(`/dish/${params.id}`, {withCredentials:true});
      setDishData(response.data);
    }
    
    fetchDish();
  }, [params.id]);
  
  useEffect(() => {

    function insertCategoryIngredientsAndNameOfImageOfDishInStates() {
      if(dishData) {
        setAlertAboutCurrentImage(`Imagem atual: 
        ${dishData.dish.image.substring(dishData.dish.image.indexOf('-') + 1)}`);
        setCategory(dishData.dish.category);
        setIngredients(dishData.ingredients.map(ingredient => ingredient.name));
      }
    }

    insertCategoryIngredientsAndNameOfImageOfDishInStates();
  }, [dishData])
  
  const optionsInSelect = ['Refeição', 'Sobremesa', 'Bebida']
  
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 365 });
  
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [alertAboutCurrentImage, setAlertAboutCurrentImage] = useState('');
  
  const handleWithChangePrice = (e) => {
    let value = e.currentTarget.value;
    setPrice(TransformToMoneyPattern(value))
  };
  
  const onImageChange = (file) => {
    setImage(file)
  }
  
  const ingredientsAndNewIngredientStates = {
    ingredients: ingredients,
    setIngredients: setIngredients,
    newIngredient: newIngredient,
    setNewIngredient: setNewIngredient,
  }

  const informationsToEditDish = {
    image: image,
    name: name,
    category: category,
    ingredients: ingredients,
    price: price,
    description: description,
    dishId: params.id
  }

  const sendInformationsToEditDish = () => {
    UpdateADishInDB(informationsToEditDish, navigate);
  }
  
  if (dishData) {
    
    console.log('valor de informationsToEditDish =>', informationsToEditDish)

    return (
      <Container fontApplied= "POPPINS_400_MEDIUM">
        <p >
          Editar prato
        </p>
  
        <Form>
  
          <div className='basicDetails'>
  
            <div className="uploadImageButton">
              <UploadImage id='imageDish' labelName='Imagem do prato'
              buttonTitle={isDesktop ? 'Selecione Imagem' : 'Selecione Imagem para alterá-la'}
              onImageChange={onImageChange}
              />
              <p id='alertAboutCurrentImage'>{alertAboutCurrentImage}</p>
            </div>
  
            <div className="dishNameInput">
              <Input id='nameDish'
              labelName='Nome'
              placeholder={dishData.dish.name}
              type='text'
              onChange={e => setName(e.target.value)}
              />
            </div>
  
            <div className="dishTypeSelect">
              <SelectDishType 
                id='categoryDish'
                placeholder={category.charAt(0).toUpperCase() + category.slice(1)}
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
                placeholder={`R$ ${Number(dishData.dish.price).toFixed(2).replace('.', ',')}`}
                type='text'
              />
            </div>
  
          </div>
  
          <div className='additionalInformations'>
            <DishDescriptionArea 
              id='descriptionDish' 
              placeholder={dishData.dish.description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
  
          <div className='actionButtons'>
            <div className="deleteDishButton">
              <DeleteDishButton title={isVerySmallScreen ? 'Excluir' : 'Excluir Prato'}/>
            </div>
            <div className="saveChangesButton">
              <Button 
                title={isVerySmallScreen ? 'Salvar' : 'Salvar alterações'}
                onClick={() => {sendInformationsToEditDish()}}
              />
            </div>
          </div>
  
        </Form>
      </Container>
    )

  }
}

EditDishForm.propTypes = {

}
