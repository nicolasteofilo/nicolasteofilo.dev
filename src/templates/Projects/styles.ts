import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  background-color: var(--background);
  color: #fff;

  @media (max-width: 1100px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const Description = styled.p`
  justify-content: center;
  margin-top: 1rem;
  max-width: 700px;

  font-family: 'Biotif';
  font-size: 1.6rem;
  font-weight: normal;
  color: var(--gray);

  strong {
    color: var(--white);
  }
`
