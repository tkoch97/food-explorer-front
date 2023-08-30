import { Form, Brand, Container } from './style';
import { Input } from '../../components/Input';
import brandNormalMobileAndDesktop from '../../assets/brand-normal-mobile-and-desktop.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { SectionTitle400Medium } from '../../components/SectionTitle400Medium';

export function SignIn() {


  return (
    <Container>

      <Brand>
        <img src={brandNormalMobileAndDesktop} alt="Food Explorer logo"></img>
      </Brand>

      <Form>
        <SectionTitle400Medium hideOnSmallScreens={true} title="Faça seu login"/>

        <Input labelName='Email' 
        placeholder='Exemplo: exemplo@exemplo.com.br'
        type='text' />

        <Input labelName='Senha' 
        placeholder='No mínimo 6 caracteres'
        type='text' />

        <Button title='Entrar'/>
        
        <ButtonText title="Criar uma conta"/>
      </Form>

    </Container>
  )
}