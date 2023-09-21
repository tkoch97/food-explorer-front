import {IoMdClose} from 'react-icons/io';
// import {PiSignOutBold} from 'react-icons/pi';
import { FiMenu } from "react-icons/fi";
import { PiReceipt, PiSignOut } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { Container, OpenAndCloseMenuButtonsSpace, Brand } from './style';
import { SearchBarr } from '../SearchBarr'
import brandAdminDesktop from "../../assets/brand-admin-desktop.svg";
import brandAdminMobile from "../../assets/brand-admin-mobile.svg";
import brandNormalMobileAndDesktop from "../../assets/brand-normal-mobile-and-desktop.svg";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../Button';

export function Header(props) {
  const {isAdmin = 0} = props;
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdminDesktop : brandAdminMobile) : brandNormalMobileAndDesktop;

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container className='headerSpace'>

      {!isDesktop && (
          <OpenAndCloseMenuButtonsSpace className='openAndCloseMenu'>
            {!isMenuOpen ? 
              <FiMenu  className='OpenMenuIcon' onClick={() => setIsMenuOpen(true)}/> : 
              <>
                <IoMdClose className='CloseMenuIcon' onClick={() => setIsMenuOpen(false)}/>
                <span className='MenuText'>Menu</span>
              </>
            }
          </OpenAndCloseMenuButtonsSpace>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Brand className='brandLogo'>
            <img src={logo}  alt="Logo Food Explorer"/>
          </Brand>

            {isDesktop && (
            <div className='searchBarrSpace'>
              <SearchBarr placeholder='Busque por pratos ou ingredientes'/>
            </div>
            )}

          <div className='buttonSpace'>
            {isDesktop && <Button title={isAdmin ? 'Novo Prato' : 'Pedidos (0)'} icon={isAdmin ? null : PiReceipt }/>}
            {!isDesktop && <PiReceipt fontSize= '3.2rem' color='#fff'/>}
          </div>

            {isDesktop && (
            <div className='signOutSpace'>
              <PiSignOut fontSize= '3.2rem' color='#fff'/>
            </div>
            )}
        </>
      )}

    </Container>
  )
}

Header.propTypes = {
  isAdmin: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};