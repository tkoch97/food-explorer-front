import { Input } from '../../components/Input';
import { Form, Brand, Container } from './style';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/authContext';
import { ButtonText } from '../../components/ButtonText';
import { SectionSignInAndSignUp } from '../../components/SectionSignInAndSignUp';
import brandNormalMobileAndDesktop from '../../assets/brand-normal-mobile-and-desktop.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const {SignIn} = useAuth();

  const executeSignIn = async () => {
    setIsLoading(true)
    try{
      await SignIn({email, password});
      setIsLoading(false);
      navigate('/')
    } catch (error){
      setIsLoading(false)
    }
  }

  const signInByEnterButton = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeSignIn();
    }
  };

  return (
    <Container>

      <Brand>
        <img src={brandNormalMobileAndDesktop} alt="Food Explorer logo"></img>
      </Brand>

      <Form>
        <SectionSignInAndSignUp hideOnSmallScreens={true} title="Faça seu login"/>

        <Input labelName='Email' 
        placeholder='Exemplo: exemplo@exemplo.com.br'
        type='email' 
        onChange={e => setEmail(e.target.value)}
        />

        <Input labelName='Senha' 
        placeholder='No mínimo 6 caracteres'
        type='password' 
        onChange={e => setPassword(e.target.value)}
        onKeyDown={signInByEnterButton}
        />

        <Button title='Entrar' loading={isLoading} onClick={executeSignIn}/>
        
        <ButtonText alignContent="center" fontApplied="POPPINS_100_MEDIUM" title="Criar uma conta" to='/register'/>
      </Form>

    </Container>
  )
}