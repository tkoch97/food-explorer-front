import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  background-color: red;

  > h1 {
    ${props => applyFontStyle(props.fontApplied)};
    color: ${({theme}) => theme.COLORS.LIGHT_200};
  }
`;