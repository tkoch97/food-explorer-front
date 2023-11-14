import { Container } from "./style";
import PropTypes from 'prop-types';

export function SectionSignInAndSignUp(props) {
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

SectionSignInAndSignUp.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  hideOnSmallScreens: PropTypes.bool
};