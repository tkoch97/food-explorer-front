import { Container } from "./style";
import PropTypes from 'prop-types';

export function ButtonText(props) {
  const {title, ...rest} = props
  return (
    <Container 
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