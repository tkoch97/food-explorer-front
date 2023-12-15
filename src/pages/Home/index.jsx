import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { SectionInHome } from '../../components/SectionInHome';
import { DishCard } from '../../components/DishCard/index.jsx';
import { Container } from './style.js';
import { useState } from 'react';

export function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container className='page'>
        <NavBar openMenu = {() => setIsMenuOpen(true)}/>

        <Menu 
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

        <SectionInHome title='Refeições'>
          <DishCard/>
          <DishCard/>
          <DishCard/>
          <DishCard/>
          <DishCard/>
          <DishCard/>
          <DishCard/>
        </SectionInHome>

        <SectionInHome title='Bebidas'>

        </SectionInHome>

        <SectionInHome title='Sobremesas'>

        </SectionInHome>

        

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
