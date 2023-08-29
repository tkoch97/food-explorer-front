import { Form, Brand, Container } from './style';
import { Input } from '../../components/Input';
import brandNormalMobileAndDesktop from '../../assets/brand-normal-mobile-and-desktop.svg';

export function SignUp() {

  return (
    <Container>
      
      <Brand>
        <img src={brandNormalMobileAndDesktop} alt="Food Explorer logo"></img>
      </Brand>

      <Form>
        <Input labelName='Seu Nome' 
        placeholder='Exemplo: Maria da Silva'
        type='text' />

        <Input labelName='Email' 
        placeholder='Exemplo: exemplo@exemplo.com.br'
        type='text' />

        <Input labelName='Senha' 
        placeholder='No mínimo 6 caracteres'
        type='text' />
      </Form>

    </Container>
  )
}