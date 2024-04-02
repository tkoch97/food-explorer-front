import { Container, Main, Options, Header, ButtonClose } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { SearchBarr } from '../../components/SearchBarr/index.jsx';
import PropTypes from 'prop-types';
import { useAuth } from "../../hooks/authContext.jsx";
import {USER_ROLE} from "../../utils/roles.js"
import {Footer} from '../Footer';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function Menu(props) {
  const navigate = useNavigate();
  const {user, signOut} = useAuth();
  const {isMenuOpen, closeMenu} = props;
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const [wordToFindDish, setWordToFindDish] = useState('');
  
  function executeSignOut(e) {
    e.preventDefault()
    signOut();
    navigate("/");
  }
  
  function handleWithNewDish(e) {
    e.preventDefault()
    navigate('/dish-create/')
  }
  
  async function searchDishByEnterButton(e) {
    if(e.key === 'Enter') {
      e.preventDefault(); 
      navigate(`/dish-search?nameOrIngredient=${wordToFindDish}`);
      closeMenu()
    }
  }
  
  return(
    <Container data-menu-is-open = {isMenuOpen}>

      <Header>
        <ButtonClose onClick={closeMenu}>
          <AiOutlineClose/>
        </ButtonClose>
        Menu
      </Header>

      <Main className="containerMenu">
        <SearchBarr placeholder="Busque por pratos ou ingredientes"
        onChange ={e => setWordToFindDish(e.target.value)}
        onKeyDown={searchDishByEnterButton}
        />

        <Options fontApplied="POPPINS_300_REGULAR">

          {isAdmin && <ButtonText id='newDishButton'
          onClick={(e) => {handleWithNewDish(e)}} 
          title="Novo Prato"/>}

          <ButtonText id='SignOutButton' title="Sair" onClick={(e) => {executeSignOut(e)}}/>

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