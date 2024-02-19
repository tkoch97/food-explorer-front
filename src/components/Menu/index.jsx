import { Container, Main, Options, Header, ButtonClose } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { SearchBarr } from '../../components/SearchBarr/index.jsx';
import PropTypes from 'prop-types';
import { useAuth } from "../../hooks/authContext.jsx";
import {USER_ROLE} from "../../utils/roles.js"
import {Footer} from '../Footer';
import { useNavigate } from "react-router-dom";

export function Menu(props) {
  const navigate = useNavigate();
  const {user, signOut} = useAuth();
  const {isMenuOpen, closeMenu} = props;
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);


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

          {isAdmin && <ButtonText 
          onClick={(e) => {e.preventDefault(); navigate('/dish-create/');}} 
          title="Novo Prato"/>}

          <ButtonText  title="Sair" onClick={() => {signOut()}}/>

        </Options>
      </Main>
      
      <div className="footer">
        <Footer/>
      </div>
    </Container>
  )
}

Menu.propTypes = {
  closeMenu: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};