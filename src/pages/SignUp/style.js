import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 35.0rem;
  height: 100vh;
  margin: auto;
  padding: 0 1.0rem;

  @media(min-width: 1024px) {
    flex-direction: row;
    gap: clamp(5.0rem, 1.0rem + 8vw, 30.6rem);
    margin: 0 10.0rem;
    max-width: 100%;
  }
  
`

export const Brand = styled.div`
  margin-bottom: 7.3rem;
  width: 22.4rem;

  > img {
    width: 100%;
  }

  @media(min-width: 1024px) {
    width: 100%;
    
    > img {
      max-width: 40.5rem;
      margin-left: clamp(2.0rem, 1.0rem + 2vw, 30.6rem);
    }
  }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  
  @media(min-width: 1024px) {
    background:  ${({theme}) => theme.COLORS.DARK_700};
    max-width: 47.6rem;
    padding: 6.4rem;
    border-radius: 1.6rem;

  }

`