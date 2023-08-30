import { Container, Options } from "./style";
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { SearchBarr } from '../../components/SearchBarr/index.jsx';
// import PropTypes from 'prop-types';

export function Menu() {

  return(
    <Container fontApplied="ROBOTO_SMALL_REGULAR">
      <SearchBarr />

      <Options>
        <ButtonText  title="Sair" fontApplied="POPPINS_300_REGULAR"/>
      </Options>
    </Container>
  )
}

Menu.propTypes = {

};