import {Container} from './style';
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { BackButton } from '../../components/BackButton/index'
import { Footer } from '../../components/Footer';
import { DishContent } from '../../components/DishContent';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authContext';
import { FetchDish } from '../../functions/FetchDish';

export function DishDetails() {

  const params = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const [dishData, setDishData] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function executeSignOut() {
    signOut();
    navigate("/");
  }

  const informationsToFetchDish = {
    params: params,
    setDishData: setDishData,
    executeSignOut: executeSignOut,
  }

  useEffect(() => {
    FetchDish(informationsToFetchDish);
  });

  return (
    <Container className='page'>
      <NavBar openMenu = {() => setIsMenuOpen(true)}/>

      <Menu 
        isMenuOpen = {isMenuOpen}
        closeMenu = {() => setIsMenuOpen(false)}
      />

      <div className="page-main">
        <BackButton/>

        {dishData && <DishContent data={dishData}/>}
      </div>


      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}