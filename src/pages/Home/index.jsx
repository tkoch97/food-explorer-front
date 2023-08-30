import { Footer } from '../../components/Footer/index.jsx';
import { Menu } from '../../components/Menu/index.jsx';
import { Container } from './style.js';

export function Home() {

  return (
    <Container>
      <Menu />
      <Footer />
    </Container>
  )
}
