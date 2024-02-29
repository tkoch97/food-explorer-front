import {Container} from './style';
import {FiPlus, FiX} from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function FieldToInsertDishIngredients(props) {

  const {value, onClick, ...rest} = props;

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  function InsertNewIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('');
  }
  
  function handleToInsertNewIngredient() {
    if(newIngredient.trim() !== '') {
      InsertNewIngredient()
    } else {
      alert('É necessário que o campo esteja preenchido para adicionar um novo ingrediente.')
    }
  }
  
  
  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">

      <label>
        Ingredientes
        <div className="spaceToAgroupIngredientsTags">

          <ul className="ingredientsTagsExistentAndInserted">

          </ul>

          <div className="tagToInsertIngredient" >
            
            <input
              type="text"
              value={newIngredient}
              placeholder='Adicionar'
              onChange={e => setNewIngredient(e.target.value)}
              onKeyDown={e => {
                if(e.key === "Enter") {
                  handleToInsertNewIngredient();
                }
              }}
              {...rest}
              />

            <button 
              type="button"
              className="button-add"
              onClick={() => handleToInsertNewIngredient()}
            >
              <FiPlus/>
            </button>

          </div>

        </div>
      </label>

    </Container>
  )
}