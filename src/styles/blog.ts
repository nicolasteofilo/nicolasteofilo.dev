import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const GridPosts = styled.div`
  max-width: 1135px;
  margin: 0 auto;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const Heading = styled.h1`
  background-image: linear-gradient(
    135deg,
    var(--colors-yellow) 0%,
    var(--colors-blue) 50%
  );

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  color: black;
  font-size: 4rem;

  margin-top: 2rem;
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #8f9ba8;

  max-width: 900px;

  strong {
    font-weight: normal;
    color: #fafafa;
  }
`

export const CountPosts = styled.h5`
  display: flex;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--white);

  max-width: 800px;

  margin: 0 0.4rem;
`
