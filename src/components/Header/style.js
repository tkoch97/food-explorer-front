import styled from 'styled-components';
// import { applyFontStyle } from '../../styles/theme';


export const Container = styled.div`
  display: flex;
  padding: 5.6rem 2.8rem 2.4rem;
  justify-content: space-between;
  width: 100%;
  background: ${({theme}) => theme.COLORS.DARK_700};
  position: fixed;
  top: 0;
  
  @media (min-width: 1024px) {
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 12.3rem;
    gap: 3.2rem;
  }

  .searchBarrSpace {
    width: 100%;
    padding: 0 5.0rem;
    background: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
  }

  .buttonSpace {
    @media (min-width: 1024px) {
      width: 77.0rem;
    }
  }
`

export const OpenAndCloseMenuButtonsSpace = styled.div`
  display: flex;
  gap: 1.2rem;
  
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
  
`