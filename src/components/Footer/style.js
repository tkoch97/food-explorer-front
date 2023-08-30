import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  height: 7.7rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: ${({theme}) => theme.COLORS.DARK_600};
  
  > p {
    ${props => applyFontStyle(props.fontApplied)};
    color: ${({theme}) => theme.COLORS.LIGHT_200}
  }

  @media(min-width:1024px) {
    gap: 30.0rem;
    > p {
      font-size: 1.4rem;
    }
  }
`

export const Brand = styled.div`
  width: clamp(9.0rem, 10.0rem + 5vw, 20.0rem);

  > img {
    width: 100%;
  }

`