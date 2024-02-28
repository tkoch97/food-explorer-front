import {Container} from './style';
import {FiPlus, FiX} from 'react-icons/fi';
import PropTypes from 'prop-types';

export function FieldToInsertDishIngredients(props) {

  const {isNew = 1, value, onClick, ...rest} = props;

  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR" isNew={isNew}>

      <label>
        Ingredientes
        <div className="spaceToAgroupIngredientsTags">

          <div className="tagToInsertOrShowIngredient" >
            
            <input
              type="text"
              value={value}
              readOnly={!isNew}
              placeholder='Adicionar'
              {...rest}
            />

            <button 
              type="button"
              className={isNew ? "button-add" : "button-delete"}
              onClick={onClick}
            >
              {isNew ? <FiPlus/> : <FiX/>}
            </button>

          </div>

        </div>
      </label>

    </Container>
  )
}