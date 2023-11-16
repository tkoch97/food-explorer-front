import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  align-items: ${props => (props.alignContent)};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background: none;
  ${props => applyFontStyle(props.fontApplied)};
  
  &:hover {
    cursor: pointer;
  }
  
  `