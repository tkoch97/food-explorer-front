import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background: ${({theme}) => theme.COLORS.TOMATO_100};
  ${props => applyFontStyle(props.fontApplied)};

  > svg {
    font-size: 3.2rem;
  }
  
  &:hover {
    background: ${({theme}) => theme.COLORS.TOMATO_200};
    cursor: pointer;
  }
  
  &:disabled {
    background: ${({theme}) => theme.COLORS.TOMATO_400};
    cursor: progress;
  }

`