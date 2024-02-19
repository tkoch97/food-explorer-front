import { styled } from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
 p {
   color: ${({theme}) => theme.COLORS.LIGHT_300};
   ${props => applyFontStyle(props.fontApplied)}
   
 }
`