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
    cursor: pointer;

    .buttonSpace {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 1.2rem 0rem;
      border-radius: 0.8rem;
      width: 100%;
      height: 100%;

      #buttonTitle {
        font-size: clamp(1.0rem, 1.0rem + 20%, 1.4rem);
        text-align: start;
      }
    }

    #selectedImageMsg{
      color: ${({ theme }) => theme.COLORS.MINT_100};
      font-size: 1.3rem;
    }
  }

  > input {
    display: none;
  }
`