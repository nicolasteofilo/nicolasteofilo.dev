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
