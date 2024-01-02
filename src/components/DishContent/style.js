import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`

  padding: 13.0rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4.0rem;
  
  @media(min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 15.0rem 3.0rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 15.0rem 12.0rem;
    gap: 1.6rem;
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4.8rem;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: column;
    }

    .dishInformations {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.4rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        align-items: center;
      }
    }
  }

`

export const DishImg = styled.div`
  display: flex;
  justify-content: center;
  
  > img {
    width: clamp(17.4rem, 50vw, 30.0rem);
  }
`

export const DishTitle = styled.div`
  ${props => applyFontStyle(props.fontApplied)};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-size: clamp(2.2rem, 4vw, 4.0rem);
`

export const DishDescription = styled.div`
  ${props => applyFontStyle(props.fontApplied)};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    text-align: center;
  }
`