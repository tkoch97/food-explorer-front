import { styled } from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakPoints';

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

  .basicDetails {display: flex;}

  .ingradientsAndPrice {display: flex;}

  .actionButtons {
    max-width: 34.0rem;
    min-width: 32.0rem;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    gap: 3.2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      min-width: 100%;
    }

    .deleteDishButton {
      width: 40%;
    }

    .saveChangesButton {
      width: 60%;
    }
  }


`