import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakPoints';

export const Container = styled.div`
  display: flex;
  padding: 5.6rem 2.8rem 2.4rem;
  justify-content: space-between;
  width: 100%;
  background: ${({theme}) => theme.COLORS.DARK_700};
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 9.0rem;
    gap: 3.2rem;
  }

  .searchBarrSpace {
    width: 100%;
    padding-left: 2.0rem;
    background: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
  }

  .requestsButtonSpace {
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 50.0rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      > svg {
        font-size: 2.5rem;
      }
    }
  }
`

export const OpenMenuButtonSpace = styled.button`

  display: none;
  border: none;
  background: none;
  
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

  @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }
  @media(max-width: ${DEVICE_BREAKPOINTS.XS}) {
    > svg {
      font-size: 2.2rem;
    };
  }

`
export const Brand = styled.div`
  cursor: pointer;
  @media(max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: flex;
    justify-content: center;
    align-items: center;
   > img {
    width: 16.0rem;
   }
  }
`
export const SignOutButton = styled.button`
background: none;
border: none;

&:hover{
  cursor: pointer;
}
`