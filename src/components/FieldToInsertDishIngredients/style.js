import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  min-width: 100%;
  
  ${props => applyFontStyle(props.fontApplied)};
  
  > .fieldStructure {
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

      .tagToInsertIngredient {
        display: flex;
        align-items: center;
        gap: .3rem;

        background: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        border: ${({theme}) => `0.1rem dashed ${theme.COLORS.LIGHT_500}`};
        border-radius: .8rem;

        > button {
          display:flex;
          font-size: 1.2rem;
          border: none;
          background: none;
          color: ${({theme}) => theme.COLORS.LIGHT_500};
          margin-right: 1.6rem;
          cursor: pointer;
        }
        
        > input {
          height: 3.2rem;
          width: clamp(5.0rem, 8.0rem + 1vw, 9.0rem);
          font-size: clamp(1.2rem, 1.0rem + 1vw, 1.6rem);
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
      
      .tagIngredient {

        display: flex;
        align-items: center;
        gap: .5rem;
  
        background: ${({theme}) => theme.COLORS.LIGHT_600};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        border: ${({theme}) => `0.1rem dashed ${theme.COLORS.LIGHT_500}`};
        border-radius: .8rem;
        
        > button {
          display:flex;
          font-size: 1.5rem;
          border: none;
          background: none;
          color: ${({theme}) => theme.COLORS.LIGHT_100};
          margin-right: 1.6rem;
          cursor: pointer;
        }

        > p {
          display:flex;
          align-items:center;
          font-size: clamp(1.2rem, 1.0rem + 1vw, 1.6rem);
          padding: .8rem 0rem .8rem 1.6rem;
          color: ${({theme}) => theme.COLORS.LIGHT_100};
          height: 3.2rem;
        }

      }
    }
  }

`