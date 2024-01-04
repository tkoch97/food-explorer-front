import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.4rem;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.DARK_200};
  position: relative;
  min-width: 30.4rem;

  @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
    min-width: 21.0rem;
  }
`
  
export const FavoriteOrEditButton = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  font-size: 2.4rem;

  :hover {
    cursor: pointer;
  }
`
  
export const DishImg = styled.div`
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
  }

  > img {
    width: 20.0rem;
  
    @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 9.0rem;
    }
  }
`
  
export const DishTitle = styled.button`
  ${props => applyFontStyle(props.fontApplied)};
  border: none;
  background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const DishDrescription = styled.div`
  ${props => applyFontStyle(props.fontApplied)};
  color: ${({theme}) => theme.COLORS.LIGHT_400};
  text-align: center;
  max-width: 30.0rem;
`

export const DishPrice = styled.div`
  ${props => applyFontStyle(props.fontApplied)};
  color: ${({theme}) => theme.COLORS.CAKE_200};
  text-align: center;
`

export const DishBuy = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1.6rem;

  @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    justify-content: center;

    .includeButton {
      height: 3.2rem;
    }
  }
`
