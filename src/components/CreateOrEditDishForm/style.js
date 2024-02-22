import { styled } from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`

display: flex;
flex-direction: column;
gap: 3.2rem;
width: 100%;
 p {
   color: ${({theme}) => theme.COLORS.LIGHT_300};
   ${props => applyFontStyle(props.fontApplied)}
   
 }
`

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 gap: 3.2rem;

 .basicDetails {
  display: flex;
}

.ingradientsAndPrice {
   display: flex;
 }
`