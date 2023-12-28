import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`

  padding: 13.0rem 1.6rem;
  
  @media(min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 15.0rem 3.0rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 15.0rem 12.0rem;
  }

`