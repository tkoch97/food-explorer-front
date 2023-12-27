import {Container} from './style';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { DishContent } from '../../components/DishContent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function DishDetails() {

  const params = useParams();

  const [dishData, setdishData] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dish/${params.id}`, {withCredentials:true});
      setdishData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container className='page'>
      <NavBar openMenu = {() => setIsMenuOpen(true)}/>

      <Menu 
        isMenuOpen = {isMenuOpen}
        closeMenu = {() => setIsMenuOpen(false)}
      />

      {dishData && <DishContent/>}

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}