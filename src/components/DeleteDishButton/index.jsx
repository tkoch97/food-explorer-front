import { Container } from "./style";
import PropTypes from 'prop-types';

export function DeleteDishButton(props) {
  const {title, loading, ...rest} = props
  return (
    <Container 
      fontApplied="POPPINS_100_MEDIUM"
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'excluindo...' : title}
    </Container>
  )
}

DeleteDishButton.propTypes = {
  title: PropTypes.string,
  loading:PropTypes.bool,
};