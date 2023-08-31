import {IoMdClose} from 'react-icons/io';
// import {PiSignOutBold} from 'react-icons/pi';
import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { Container, OpenAndCloseMenuButtonsSpace, Brand } from './style';
import brandAdminDesktop from "../../assets/brand-admin-desktop.svg";
import brandAdminMobile from "../../assets/brand-admin-mobile.svg";
import brandNormalMobileAndDesktop from "../../assets/brand-normal-mobile-and-desktop.svg";
import PropTypes from 'prop-types';

export function Header(props) {
  const {isMenuOpen = 1, isAdmin = 1} = props;
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdminDesktop : brandAdminMobile) : brandNormalMobileAndDesktop;

  return (
    <Container>

      {!isDesktop && (

        <OpenAndCloseMenuButtonsSpace>
          {!isMenuOpen ? 
            <FiMenu  className='OpenMenuIcon'/> : 
            <>
              <IoMdClose className='CloseMenuIcon'/>
              <span className='MenuText'>Menu</span>
            </>
          }
        </OpenAndCloseMenuButtonsSpace>

      )}

      {(isDesktop || !isMenuOpen) && (
        <Brand>
          <img src={logo}  alt="Logo Food Explorer"/>
        </Brand>
      )}

    </Container>
  )
}

Header.propTypes = {
  isAdmin: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
};