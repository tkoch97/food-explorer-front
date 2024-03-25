import {Container} from './style';
import PropTypes from 'prop-types';

export function SelectDishType(props) {

  const {values, placeholder, ... rest} = props;

  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">
      <label>
        Categoria
        <select name='category' defaultValue={placeholder} {...rest}>
        <option value={placeholder} disabled hidden >{placeholder}</option>
        {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
        ))}
        </select>
      </label>
    </Container>
  )
}

SelectDishType.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string
}