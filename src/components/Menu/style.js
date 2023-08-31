import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap:4.6rem;
  margin: 15.0rem 2.8rem;
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