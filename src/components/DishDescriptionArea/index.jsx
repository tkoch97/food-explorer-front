import {Container} from './style';
import PropTypes from 'prop-types';

export function DishDescriptionArea(props) {

  const {placeholder} = props;

  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">
      <label>
        Descrição
       <textarea id="" cols="30" rows="10" placeholder={placeholder}/>
      </label>
    </Container>
  )
}

DishDescriptionArea.propTypes = {
  placeholder: PropTypes.string
}