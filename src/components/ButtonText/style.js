import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background: none;
  ${props => applyFontStyle(props.fontApplied)};
  
  &:hover {
    cursor: pointer;
  }

`