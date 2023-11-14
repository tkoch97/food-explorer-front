import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakPoints';

export const Container = styled.section`
  ${props => applyFontStyle(props.fontApplied)};

  margin-bottom: 6.0rem;

  > p {
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    @media(max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.8rem;
    }
  }

  .cardContainer {
    display: flex;
    flex-direction: row;
    gap: 2.7rem;
  }
`