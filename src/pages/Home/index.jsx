import { Footer } from '../../components/Footer/index.jsx';
import { NavBar } from '../../components/NavBar/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';
import { Container } from './style.js';

export function Home() {

  return (
    <Container className='page'>
      <div className='header'>
        <NavBar />
      </div>

      <div className='hero'>
        <Hero/>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
