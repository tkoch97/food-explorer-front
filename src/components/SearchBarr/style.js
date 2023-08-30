import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  ${props => applyFontStyle(props.fontApplied)};

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-left: 1.8rem;
    font-size: 2.0rem;
    position: fixed;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    padding: 1.2rem 1.4rem 1.2rem 5.0rem;
    border: none;
    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`