import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { SectionInHome } from '../../components/SectionInHome';
import { DishCard } from '../../components/DishCard/index.jsx';
import { Container } from './style.js';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';

export function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dish`, {withCredentials:true});
      setDishes(response.data)
    }

    fetchDishes();
  }, []);

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
          {
            dishes.map(dish => (
             <DishCard 
              key={String(dish.id)}
              data={dish}
             /> 
            ))
          }
        </SectionInHome>

        {/* <SectionInHome title='Bebidas'>

        </SectionInHome>

        <SectionInHome title='Sobremesas'>

        </SectionInHome> */}

        

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
