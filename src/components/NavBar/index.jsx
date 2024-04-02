import { FiMenu } from "react-icons/fi";
import { PiReceipt, PiSignOut } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { Container, OpenMenuButtonSpace, Brand, SignOutButton } from './style';
import { SearchBarr } from '../SearchBarr'
import brandAdminDesktop from "../../assets/brand-admin-desktop.svg";
import brandAdminMobile from "../../assets/brand-admin-mobile.svg";
import brandNormalMobileAndDesktop from "../../assets/brand-normal-mobile-and-desktop.svg";
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { useAuth } from "../../hooks/authContext";
import {USER_ROLE} from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function NavBar(props) {
  const {user, signOut } = useAuth();
  const [wordToFindDish, setWordToFindDish] = useState('');

  const {openMenu} = props;
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdminDesktop : brandAdminMobile) : brandNormalMobileAndDesktop;

  const navigate = useNavigate();

  function executeSignOut() {
    signOut();
    navigate("/");
  }

  async function searchDishByEnterButton(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      navigate(`/dish-search?nameOrIngredient=${wordToFindDish}`);
    }
  }

  return (
    <Container isDesktop={isDesktop}>
      <OpenMenuButtonSpace>
        <FiMenu onClick={openMenu}/>
      </OpenMenuButtonSpace>

      <Brand className='brandLogo' onClick={() => navigate('/home')}>
        <img src={logo}  alt="Logo Food Explorer"/>
      </Brand>

        {isDesktop && (
        <div className='searchBarrSpace'>
          <SearchBarr 
          id='searchDishOnNavBar' 
          placeholder='Busque por pratos ou ingredientes'
          onChange ={e => setWordToFindDish(e.target.value)}
          onKeyDown={searchDishByEnterButton}
          />
        </div>
        )}

        <div className='requestsButtonSpace'>
          {isDesktop && 
          <Button 
          title={isAdmin ? 'Novo Prato' : 'Pedidos (0)'} icon={isAdmin ? null : PiReceipt }
          onClick={isAdmin ? () => navigate('/dish-create/') : () => navigate('/home')}
          />}
          {!isDesktop && !isAdmin && <PiReceipt fontSize= '3.2rem' color='#fff'/>}
        </div>

        {isDesktop && (
        <SignOutButton>
          <PiSignOut fontSize= '3.2rem' color='#fff' onClick={executeSignOut}/>
        </SignOutButton>
        )}

    </Container>
  )
}

NavBar.propTypes = {
  isAdmin: PropTypes.bool,
  openMenu: PropTypes.bool,
};