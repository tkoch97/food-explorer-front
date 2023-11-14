import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { SectionHome } from '../../components/SectionHome';
import { Container } from './style.js';
import { useState } from 'react';

export function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container className='page'>
        <NavBar openMenu = {() => setIsMenuOpen(true)}/>

        <Menu 
          isAdmin = '1'
          isMenuOpen = {isMenuOpen}
          closeMenu = {() => setIsMenuOpen(false)}
        />

      <div className='main'>

        <div className='hero'>
          <div className='heroImage'/>
          <div className='heroText'>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <SectionHome title='Refeições'>

        </SectionHome>

        <SectionHome title='Bebidas'>

        </SectionHome>
        
        <SectionHome title='Sobremesas'>

        </SectionHome>

        

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
