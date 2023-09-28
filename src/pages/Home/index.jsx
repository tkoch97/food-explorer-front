import { Footer } from '../../components/Footer/index.jsx';
import { NavBar } from '../../components/NavBar/index.jsx';
import { Container } from './style.js';

export function Home() {

  return (
    <Container className='page'>
      <div className='header'>
        <NavBar />
      </div>

      <div className='main'>

        <div className='hero'>
          <div className='heroImage'/>
          <div className='heroText'>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        

      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
