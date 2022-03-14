import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 2rem;
  &:hover {
    background-color: #212024;
  }

  transition: all 0.3s ease-in-out;
`

export const Heading = styled.h1`
  color: var(--white);
  background-color: transparent;

  font-weight: 500;

  margin-top: 2rem;
`

export const Description = styled.p`
  background-color: transparent;
  font-weight: 200;
  color: #8f9ba8;
  display: flex;
  font-size: 1.5rem;
  margin-top: 1rem;
  max-width: 40rem;
`

export const CoverImg = styled.img`
  border-radius: 2rem;

  background-size: 40rem 7rem;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`
