import { Form, Brand, Container } from './style';
import { useState } from 'react';
import { Input } from '../../components/Input';
import brandNormalMobileAndDesktop from '../../assets/brand-normal-mobile-and-desktop.svg';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { SectionSignInAndSignUp } from '../../components/SectionSignInAndSignUp';
import { executeSignUp } from '../../functions/ExecuteSignUp';
import { useNavigate } from 'react-router-dom';

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <Container>

      <Brand>
        <img src={brandNormalMobileAndDesktop} alt="Food Explorer logo"></img>
      </Brand>

      <Form>
        <SectionSignInAndSignUp hideOnSmallScreens={true} title="Crie sua conta"/>

        <Input labelName='Seu Nome' 
        placeholder='Exemplo: Maria da Silva'
        type='text' 
        onChange ={e => setName(e.target.value)}
        />

        <Input labelName='Email' 
        placeholder='Exemplo: exemplo@exemplo.com.br'
        type='email' 
        onChange ={e => setEmail(e.target.value)}
        />

        <Input labelName='Senha' 
        placeholder='No mínimo 6 caracteres'
        type='password' 
        onChange ={e => setPassword(e.target.value)}
        />

        <Button title='Criar conta' onClick={() => executeSignUp(name, email, password, navigate)}/>
        
        <ButtonText alignContent="center" fontApplied="POPPINS_100_MEDIUM" title="Já tenho uma conta" to='/'/>
      </Form>


    </Container>
  )
}