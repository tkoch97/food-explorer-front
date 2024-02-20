import {Container} from './style';
import PropTypes from 'prop-types';

export function SelectDishType(props) {

  const {values} = props;

  return(
    <Container>
      <label>
        Preço
        <select>
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
  values: PropTypes.arrayOf(PropTypes.string)
}