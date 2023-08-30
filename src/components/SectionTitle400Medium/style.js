import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.section`
  ${props => applyFontStyle(props.fontApplied)};
  
  @media(max-width: 1023px) {
    display: ${props => (props.hideOnSmallScreens ? 'none' : 'block')};
  }

  > p {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-align: center;
  }
`