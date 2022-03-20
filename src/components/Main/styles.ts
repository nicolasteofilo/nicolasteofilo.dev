import styled from 'styled-components'

export const Wrapper = styled.main`
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

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  span {
    font-weight: bold;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10%;
  margin-top: 1rem;
`

export const Text = styled.p`
  font-family: 'Biotif', sans-serif;

  margin-top: 1rem;
  font-size: 1.6rem;
  margin-left: 2rem;
  color: #8f9ba8;
  max-width: 300px;
  line-height: 1.5;
  font-weight: 400;

  br {
    margin-top: 1rem;
  }

  p {
    display: inline;
    font-style: italic;
  }
`

export const Highlight = styled.span`
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: underline;
    font-style: italic;
  }
`
