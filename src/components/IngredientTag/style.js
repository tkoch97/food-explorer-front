import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  /* background-color: #f09432; */
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
`