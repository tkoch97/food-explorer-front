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

    #alertAboutCurrentImage {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1.3rem;
      margin-top: .5rem;
    }
  }

  .ingredientsAndPrice {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    .ingredients {
      width: 80%;
    }

    .price {
      width: 20%;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      
      .ingredients {
        width: 100%;
      }
      .price {
        width: 100%;
      }

    }
  
  }

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