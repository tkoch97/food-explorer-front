import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  ${props => applyFontStyle(props.fontApplied)};
  color: ${({theme}) => theme.COLORS.LIGHT_400};
  width: 100%;
  
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 0.8rem;
    
    textarea {
      ${props => applyFontStyle(props.fontApplied)};
      color: ${({theme}) => theme.COLORS.LIGHT_400};

      background: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      border-radius: 0.8rem;
      padding: 1.2rem 1.4rem;
      height: 17.2rem;
      width: 100%;
      resize: none;

    }
  }


`