import styled from 'styled-components';
import heroImageBackgroundMobile from '../../assets/banner-home-mobile.png';
import heroImageBackgroundDesktop from '../../assets/banner-home-desktop.png';

export const Container = styled.div `
  display: flex;
  flex-direction: column;

 .header {
  position: fixed;
  z-index: 2;
  top: 0;
 }

 .footer {
  position: fixed;
  z-index: 2;
  top: 0;
 }

 .main {
  padding: 17.0rem 0;
  margin: 0 1.6rem;
  
  @media(min-width: 768px) {
    padding: 25.0rem 0;
  }
  
  @media(min-width: 1024px) {
    margin: 0 12.4rem;
  }

  .hero {
    width: 100%;
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    display: grid;
    grid-template-columns: 45% 50%;
    border-radius: 0.8rem;

    @media(min-width: 1280px) {
      max-height: 35.0rem;
    }

    .heroImage {
      width: 100%;
      height: 100%;
      align-self: center;
      position: relative;

      &::before{
        content: '';
        position: absolute;
        width: 19.1rem;
        height: 14.9rem;
        bottom: 0;
        left: -2.0rem;
        z-index: 1;
        background: url(${heroImageBackgroundMobile}) no-repeat center bottom;
        background-size: 100%;

        @media(max-width: 424px) {
          width: 15.1rem;
          left: -1.3rem;
        }
        
        @media(min-width: 768px) {
          width: 38.0rem;
          height: 40.0rem;
        }

        @media(min-width: 1280px) {
          background: url(${heroImageBackgroundDesktop}) no-repeat center bottom;
          width: 63.2rem;
          height: 40.6rem;
          left: -6.0rem;
          bottom: -1.4rem;
          background-size: cover;
        }
      }
    }

    .heroText {
      width: 100%;
      padding: 3.6rem 0rem 2.2rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      @media(min-width: 768px) {
        padding: 8.8rem 0rem 9.2rem 0;
      }

      @media(min-width: 1280px) {
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
      }

      h2 {
        font-family: 'Poppins';
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
        
        @media(max-width: 424px) {
          font-size: clamp(1.0rem, 1.0rem + 1vw, 1.5rem);
        }

        @media(min-width: 768px) {
          font-size: 3.0rem;
          font-weight: 500;
          line-height: 140%;
        }

        @media(min-width: 1280px) {
          font-size: 4.0rem;
        }
      }

      p {
        font-family: 'Poppins';
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 140%;

        @media(max-width: 424px) {
          font-size: clamp(0.6rem, 0.6rem + 1vw, 1.0rem);
        }

        @media(min-width: 768px) {
          font-family: 'Roboto';
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 100%;
        }

        @media(min-width: 1280px) {
          font-size: 1.6rem;
        }
      }
    }
  }
 }
`