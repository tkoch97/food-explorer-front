import { Container, ContainerMenu, Options } from "./style";
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { SearchBarr } from '../../components/SearchBarr/index.jsx';
import PropTypes from 'prop-types';

export function Menu(props) {
  const {isAdmin = 0} = props;
  return(
    <Container >

      <ContainerMenu>
        <SearchBarr placeholder="Busque por pratos ou ingredientes"/>

        <Options fontApplied="POPPINS_300_REGULAR">

          {isAdmin ? (
            <ButtonText title="Novo Prato" />
          ) : null}

          <ButtonText  title="Sair"/>

        </Options>
      </ContainerMenu>

    </Container>
  )
}

Menu.propTypes = {
  isAdmin: PropTypes.bool,
};