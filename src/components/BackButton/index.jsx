import { Container } from './style';
import { useNavigate } from 'react-router-dom'
import backArrow from '../../assets/backArrow.svg';


export function BackButton() {

  const navigate = useNavigate();

  function backPage() {
    navigate(-1);
  }

  return(
    <Container onClick={backPage}>
      <img className='backArrow' src={backArrow} alt="seta para a esquerda" />
      <p>
        voltar
      </p>
    </Container>
  )
}