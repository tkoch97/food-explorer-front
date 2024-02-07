import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 4.0rem;

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4.8rem;

    max-width: 110.0rem;
    
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

      .dishInformations_ingredients {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          max-width: 40.0rem;
          gap: 2.0rem;
        }

        @media (max-width: 369px) {
          display: flex;
          flex-wrap: wrap;
          gap: 1.0rem;
        }
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