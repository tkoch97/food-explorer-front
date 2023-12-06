import { Container, Main, Options, Header, ButtonClose } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { SearchBarr } from '../../components/SearchBarr/index.jsx';
import PropTypes from 'prop-types';
import { useAuth } from "../../hooks/authContext.jsx";

export function Menu(props) {
  const {user, signOut} = useAuth();
  const {isMenuOpen, closeMenu} = props;
  const isAdmin = user.isAdmin;
  return(
    <Container data-menu-is-open = {isMenuOpen}>

      <Header>
        <ButtonClose onClick={closeMenu}>
          <AiOutlineClose/>
        </ButtonClose>
        Menu
      </Header>

      <Main className="containerMenu">
        <SearchBarr placeholder="Busque por pratos ou ingredientes"/>

        <Options fontApplied="POPPINS_300_REGULAR">

          {isAdmin ? (
            <ButtonText title="Novo Prato" />
          ) : null}

          <ButtonText  title="Sair" onClick={() => signOut()}/>

        </Options>
      </Main>

    </Container>
  )
}

Menu.propTypes = {
  isAdmin: PropTypes.bool,
  closeMenu: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};