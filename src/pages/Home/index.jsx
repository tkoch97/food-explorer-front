import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { SectionInHome } from '../../components/SectionInHome';
import { DishCard } from '../../components/DishCard/index.jsx';
import { Container } from './style.js';
import { useEffect, useState } from 'react';
import { GetDishes } from '../../functions/GetDishes.js';

export function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    GetDishes(setDishes);
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

        <div id="listDishes">
          {dishes.some(dish => dish.category.toLowerCase() === 'refeição') && (
            <SectionInHome title='Refeições'>
              {
                dishes.filter(dish => dish.category.toLowerCase() === 'refeição').map(
                  filteredDish => <DishCard key={String(filteredDish.id)} data={filteredDish}/> 
                )
              }
            </SectionInHome>
          )}

          {dishes.some(dish => dish.category.toLowerCase() === 'sobremesa') && (
            <SectionInHome title='Sobremesas'>
              {
                dishes.filter(dish => dish.category.toLowerCase() === 'sobremesa').map(
                  filteredDish => <DishCard key={String(filteredDish.id)} data={filteredDish}/>
                )
              }
            </SectionInHome>
          )}

          {dishes.some(dish => dish.category.toLowerCase() === 'bebida') && (
            <SectionInHome title='Bebidas'>
              {
                dishes.filter(dish => dish.category.toLowerCase() === 'bebida').map(
                  filteredDish => <DishCard key={String(filteredDish.id)} data={filteredDish}/> 
                )
              }
            </SectionInHome>
          )}
        </div>

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
