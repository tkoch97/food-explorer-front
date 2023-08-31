import styled from 'styled-components';
// import { applyFontStyle } from '../../styles/theme';


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({theme}) => theme.COLORS.DARK_700};
  position: fixed;
  top: 0;
`

export const OpenAndCloseMenuButtonsSpace = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 6.0rem 0 3.0rem 2.8rem;
  
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
  }
  
  > .MenuText {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-size: 21.163px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  `

export const Brand = styled.div`
  margin: 6.0rem auto 3.0rem auto;

`