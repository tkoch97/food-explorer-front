import { Container } from "./style";
import PropTypes from 'prop-types';

export function IngredientTag(props) {
  const {text} = props
  return(
    
    <Container>
      {text}
    </Container>
  )
}

IngredientTag.propTypes = {
  text: PropTypes.string,
};