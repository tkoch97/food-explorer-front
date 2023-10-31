import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
  `

export const Header = styled.div`
  background: ${({theme}) => theme.COLORS.DARK_700};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  gap: 1.6rem;
  font-family: "Roboto";
  font-size: 2.1rem;
  padding: 6.0rem 2.8rem 2.8rem;
  `

export const ButtonClose = styled.button`
  border: none;
  background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-size: 2.5rem;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap:4.6rem;
  padding: 3.6rem 2.8rem;
`

export const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  
  // Aplicando um padding e border bottom em todos os objetos filhos
  > * {
    ${props => applyFontStyle(props.fontApplied)};
    padding: 1.0rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
  }
`