import { Container } from "./style";
import PropTypes from 'prop-types';

export function ButtonText({title, ...rest}) {
  return (
    <Container 
      fontApplied="POPPINS_100_MEDIUM"
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}

ButtonText.propTypes = {
  title: PropTypes.string
};