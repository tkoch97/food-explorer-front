import {Container} from './style';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { useState } from 'react';
import { Footer } from '../../components/Footer';

export function DishDetails() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container className='page'>
      <NavBar openMenu = {() => setIsMenuOpen(true)}/>

      <Menu 
        isMenuOpen = {isMenuOpen}
        closeMenu = {() => setIsMenuOpen(false)}
      />

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}