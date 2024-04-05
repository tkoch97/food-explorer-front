import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakPoints';

export const Container = styled.section`

  ${props => applyFontStyle(props.fontApplied)};
  margin-bottom: 6.0rem;
  
  > p {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    margin-bottom: 2.5rem;
    
    @media(max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.8rem;
    }
  }

  > .content {
    position: relative;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 10.0rem;
      pointer-events: none;
      z-index: 1;
  
      @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: none;
      }
    }
  
    &::before {
        left: 0;
        background: linear-gradient(to right, rgba(0, 10, 15, 1), rgba(0, 0, 0, 0));
    }
  
    &::after {
        right: 0;
        background: linear-gradient(to left, rgba(0, 10, 15, 1), rgba(0, 0, 0, 0));
    }
  
    > button {
      background: none;
      border: none;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-size: 3.0rem;

      @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: none;
      }
  
      :hover {
        cursor: pointer;
      }
    }
  
    #arrowLeft {
      position: absolute;
      bottom: 50%;
      left: 0;
      z-index: 2;
    }
    
    #arrowRight {
      position: absolute;
      bottom: 50%;
      right: 0;
      z-index: 2;
    }
    
  }
  
  .cardContainer {
    display: flex;
    flex-direction: row;
    gap: 2.7rem;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    @media(max-width: ${DEVICE_BREAKPOINTS.LG}) {
      gap: 1.6rem;
    }
  }

`