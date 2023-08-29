import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 31.6rem;
  height: 100vh;
  margin: auto;
  padding: 0 1.0rem;
  `

export const Brand = styled.div`
  margin-bottom: 7.3rem;
  width: 22.4rem;

  > img {
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
`