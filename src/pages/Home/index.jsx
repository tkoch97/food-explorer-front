import { Footer } from '../../components/Footer/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Container } from './style.js';

export function Home() {

  return (
    <Container className='page'>
      <div className='header'>
        <Header />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </Container>
  )
}
