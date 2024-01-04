import styled from 'styled-components';
import { applyFontStyle } from '../../styles/theme';

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  ${props => applyFontStyle(props.fontApplied)};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.4rem;
`