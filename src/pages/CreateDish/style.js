import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;

  .page-main {
    padding: 12.0rem 9.0rem 15.0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.2rem;
    width: 100%;

    @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 15.0rem 5.0rem;
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 12.0rem 2.0rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.XL}) {
      padding: 12.0rem 20.0rem;
    }
    
  }
`