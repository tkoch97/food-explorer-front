import { Container } from "./style";
import { useEffect, useState } from "react";
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { CreateOrEditDishForm } from "../../components/CreateOrEditDishForm";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";


export function EditDish() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();

  const [dishData, setDishData] = useState();

  useEffect( () =>  {
    async function fetchDish() {
      const response = await api.get(`/dish/${params.id}`, {withCredentials:true});
      setDishData(response.data);
    }

    fetchDish();
  });

  return (
    <Container className="page">
      <NavBar openMenu = {() => setIsMenuOpen(true)}/>
      
      <Menu 
        isMenuOpen = {isMenuOpen}
        closeMenu = {() => setIsMenuOpen(false)}
      />

      <div className="page-main">
        <BackButton/>

        <CreateOrEditDishForm type='edit' currentDish={dishData}/>
      </div>

      <Footer/>
    </Container>
  )
}