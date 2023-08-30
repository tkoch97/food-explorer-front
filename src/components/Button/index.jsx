import { Container } from "./style";
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, loading = false, ...rest} = props
  return (
    <Container 
      fontApplied="POPPINS_100_MEDIUM"
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  loading:PropTypes.bool
};