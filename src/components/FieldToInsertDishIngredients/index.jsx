import {Container} from './style';
import {FiPlus, FiX} from 'react-icons/fi';
// import PropTypes from 'prop-types';
import { useState } from 'react';

export function FieldToInsertDishIngredients(props) {

  const {...rest} = props;

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  function InsertNewIngredient() {
    if(newIngredient.trim() !== '') {
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient('');
    } else {
      alert('É necessário que o campo esteja preenchido para adicionar um novo ingrediente.')
    }
  }

  const  InsertNewIngredientByEnterButton = async (e) => {
    if(e.key === "Enter") {
      e.preventDefault()
      InsertNewIngredient();
    }
  }

  function removeIngredient(ingredientDeleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
  }
  
  
  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <div className='fieldStructure'>
        Ingredientes
        <div className="spaceToAgroupIngredientsTags">

            {
              ingredients.map( (ingredient, index) => (
                <div className="tagIngredient" key={String(index)}>
                  <p className="ingredientName">
                    {ingredient}
                  </p>
                  <button className="removeIngredient"
                  type='button'
                  onClick={() => removeIngredient(ingredient)}
                  >
                    <FiX/>
                  </button>
                </div>
              ) )
            }

          <div className="tagToInsertIngredient" >
            
            <input
              type="text"
              value={newIngredient}
              placeholder='Adicionar'
              onChange={e => setNewIngredient(e.target.value)}
              onKeyDown={e => {
                InsertNewIngredientByEnterButton(e);
              }}
              {...rest}
              />

            <button 
              type="button"
              className="addIngredient"
              onClick={() => InsertNewIngredient()}
            >
              <FiPlus/>
            </button>

          </div>

        </div>
      </div>

    </Container>
  )
}