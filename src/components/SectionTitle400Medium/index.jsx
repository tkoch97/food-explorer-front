import { Container } from "./style";
import PropTypes from 'prop-types';

export function SectionTitle400Medium(props) {
  const {title, children, hideOnSmallScreens} = props
  return(
    <Container 
      fontApplied="POPPINS_400_MEDIUM"
      hideOnSmallScreens={hideOnSmallScreens}
    >
      <p>{title}</p>
      {children}
    </Container>
  );
}

SectionTitle400Medium.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  hideOnSmallScreens: PropTypes.bool
};