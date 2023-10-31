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

export function NavBar(props) {
  const {isAdmin = 1, openMenu} = props;
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (isDesktop ? brandAdminDesktop : brandAdminMobile) : brandNormalMobileAndDesktop;

  return (
    <Container isDesktop={isDesktop}>
      <OpenMenuButtonSpace>
        <FiMenu onClick={openMenu}/>
      </OpenMenuButtonSpace>

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
        <SignOutButton>
          <PiSignOut fontSize= '3.2rem' color='#fff'/>
        </SignOutButton>
        )}

    </Container>
  )
}

NavBar.propTypes = {
  isAdmin: PropTypes.bool,
  openMenu: PropTypes.bool,
};