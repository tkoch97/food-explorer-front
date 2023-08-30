import { Container } from "./style";
import PropTypes from 'prop-types';

export function SectionTitle400Medium({title, children}) {
  
  return(
    <Container fontApplied="POPPINS_400_MEDIUM">
      <p>{title}</p>
      {children}
    </Container>
  );
}

SectionTitle400Medium.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};