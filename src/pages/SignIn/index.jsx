import { Form, Brand, Container } from './style';
import { Input } from '../../components/Input';
import brandNormalMobileAndDesktop from '../../assets/brand-normal-mobile-and-desktop.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { SectionSignInAndSignUp } from '../../components/SectionSignInAndSignUp';

export function SignIn() {


  return (
    <Container>

      <Brand>
        <img src={brandNormalMobileAndDesktop} alt="Food Explorer logo"></img>
      </Brand>

      <Form>
        <SectionSignInAndSignUp hideOnSmallScreens={true} title="Faça seu login"/>

        <Input labelName='Email' 
        placeholder='Exemplo: exemplo@exemplo.com.br'
        type='text' />

        <Input labelName='Senha' 
        placeholder='No mínimo 6 caracteres'
        type='text' />

        <Button title='Entrar'/>
        
        <ButtonText alignContent="center" fontApplied="POPPINS_100_MEDIUM" title="Criar uma conta" to='/register'/>
      </Form>

    </Container>
  )
}