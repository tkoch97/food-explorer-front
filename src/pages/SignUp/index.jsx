import { Form, Brand, Container } from './style';
import { Input } from '../../components/Input';
import brandNormalMobileAndDesktop from '../../assets/brand-normal-mobile-and-desktop.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { SectionSignInAndSignUp } from '../../components/SectionSignInAndSignUp';

export function SignUp() {


  return (
    <Container>

      <Brand>
        <img src={brandNormalMobileAndDesktop} alt="Food Explorer logo"></img>
      </Brand>

      <Form>
        <SectionSignInAndSignUp hideOnSmallScreens={true} title="Crie sua conta"/>

        <Input labelName='Seu Nome' 
        placeholder='Exemplo: Maria da Silva'
        type='text' />

        <Input labelName='Email' 
        placeholder='Exemplo: exemplo@exemplo.com.br'
        type='text' />

        <Input labelName='Senha' 
        placeholder='No mínimo 6 caracteres'
        type='text' />

        <Button title='Criar conta'/>
        
        <ButtonText alignContent="center" fontApplied="POPPINS_100_MEDIUM" title="Já tenho uma conta"/>
      </Form>


    </Container>
  )
}