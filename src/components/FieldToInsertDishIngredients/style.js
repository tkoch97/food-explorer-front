import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`

width: 100%;
  ${props => applyFontStyle(props.fontApplied)};
  
  > label {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    .spaceToAgroupIngredientsTags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 0.8rem 0.8rem;
      border-radius: 0.8rem;
      width: 100%;
      min-height: 4.8rem;

      .tagToInsertOrShowIngredient {
        display: flex;
        align-items: center;

        background: ${({theme, isNew}) => isNew ? "none" : theme.COLORS.LIGHT_600};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        border: ${({theme, isNew}) => isNew ? `0.1rem dashed ${theme.COLORS.LIGHT_500}` : "none"};
        border-radius: 1.0rem;

        > button {
          font-size: 1.5rem;
          border: none;
          background: none;
          color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
          padding-right: 1.6rem;
        }

        > input {
          height: 3.2rem;
          width: auto;
          font-size: clamp(0.8rem, 0.8rem + 1vw, 1.6rem);
          padding: .8rem 0rem .8rem 1.6rem;
          color: ${({theme}) => theme.COLORS.LIGHT_100};
          background: none;
          border: none;

          &:focus {
            outline: none;
          }

          &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
          }
        }
      }
    }
  }

`