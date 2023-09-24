import styled, {css, keyframes} from 'styled-components';

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 5.6rem 2.8rem 2.4rem;
  justify-content: space-between;
  width: 100%;
  background: ${({theme}) => theme.COLORS.DARK_700};
  position: fixed;
  top: 0;

  ${props => 
    !props.isDesktop && props.isMenuOpen && css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 6.4rem;
      height: 100%;
    `}
  
  @media (min-width: 1024px) {
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 12.3rem;
    gap: 3.2rem;
  }

  .menuSpace {
    animation: ${slideInFromTop} 0.6s ease-in-out backwards;
  }

  .searchBarrSpace {
    width: 100%;
    padding: 0 5.0rem;
    background: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
  }

  .buttonSpace {
    @media (min-width: 1024px) {
      width: 40.0rem;
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