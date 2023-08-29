import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.8rem;
  ${props => applyFontStyle(props.fontApplied)};

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > .inputSpace {
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.8rem;
  }
  
  > .inputSpace input {
    width: 100%;
    height: 4.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;
    padding: 1.2rem 1.4rem;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`