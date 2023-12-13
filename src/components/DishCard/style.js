import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.COLORS.DARK_400}
`

export const FavoriteOrEditButton = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_300}
`

export const DishImg = styled.div`
  display: flex;
  justify-content: center;
  > img {
    width: 20.0rem;
  }
`

export const DishTitle = styled.button`
  border: none;
  background: none;
  color: ${({theme}) => theme.COLORS.LIGHT_300}
`

export const DishDrescription = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_400}
`

export const DishPrice = styled.div`
  color: ${({theme}) => theme.COLORS.CAKE_200}
`

export const DishBuy = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1.6rem;

  .count {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.4rem;
  }
`
