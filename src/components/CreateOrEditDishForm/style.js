import { styled } from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
// import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

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
    gap: 3.2rem;

    .uploadImageButton {
      width: 30%;
    }
    .dishNameInput {
      width: 50%;
    }
    .dishTypeSelect {
      width: 40%;
    }
    
    @media (max-width: 790px) {
      flex-direction: column;
      
      .uploadImageButton {
        width: 100%;
      }
      .dishNameInput {
        width: 100%;
      }
      .dishTypeSelect {
        width: 100%;
      }

    }
  }

  .ingradientsAndPrice {display: flex;}

  .actionButtons {
    max-width: 37.0rem;
    min-width: 36.0rem;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    gap: 3.2rem;

    @media (max-width: 460px) {
      min-width: 100%;
    }

    @media (max-width: 386px) {
      gap: 1.0rem;
    }

    .deleteDishButton {
      width: 40%;
    }

    .saveChangesButton {
      width: 60%;
    }
  }


`