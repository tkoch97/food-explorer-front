import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';


export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 10%;

  font-family: 'Poppins';
  font-size: 2.4rem;
  font-weight: 700;

  cursor: pointer;

  @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 2.0rem;
  }

  .backArrow {
    width: 3.5rem;

    @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 3.0rem;
    }
  }
`