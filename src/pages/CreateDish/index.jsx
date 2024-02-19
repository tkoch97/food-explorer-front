import { Container } from "./style";
import { useState } from "react";
import { NavBar } from '../../components/NavBar';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';


export function CreateDish() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container className="page">
      <NavBar openMenu = {() => setIsMenuOpen(true)}/>
      
      <Menu 
        isMenuOpen = {isMenuOpen}
        closeMenu = {() => setIsMenuOpen(false)}
      />

      <div className="page-main">
        <BackButton/>

        
      </div>

      <Footer/>
    </Container>
  )
}