import styled, {css} from 'styled-components';
// import { applyFontStyle } from '../../styles/theme';


export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`
export const ImageBanner = styled.img`
  position: absolute;
  z-index: 1;

  ${props => 
    !props.isDesktop ? css`
    width: 19.1rem;
    ` : css`
    width:63.2rem;
    `
  }
`

export const Block = styled.div`
  background: ${({theme}) => theme.COLORS.GRADIENTS_200};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  margin: 3.0rem 0 0 3.0rem;
  padding: 3.6rem 2.1rem 2.2rem;
  border-radius: 0.8rem;
  height: 35.0rem;
  display: flex;
  justify-content: flex-end;

`

export const TitleAndSubtitle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${props => 
    !props.isDesktop ? css`

      width: 20.2rem;

      h2 {
        font-family: 'Poppins';
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%
      }

      p {
        font-family: 'Poppins';
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 140%
        width: 20.2rem;
      }
    ` : css`

      width: 42.2rem;
      h2 {
        font-family: 'Poppins';
        font-size: 4.0rem;
        font-weight: 500;
        line-height: 140%
      }

      p{
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
      }
    `
  }
  
`