import styled, { keyframes } from 'styled-components'

const blinkCursor = keyframes`
  from { border-right: 2px solid rgba(255, 255, 255, 0.75); }
  to { border-right: transparent }
`

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 269px;
  }
`

export const Container = styled.div`
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

export const HiMessage = styled.div`
  font-family: 'Biotif', sans-serif;
  margin-top: 1rem;
  font-size: 2rem;
  color: #8f9ba8;
  width: 269px;
  font-weight: 400;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;

  span {
    color: var(--white);

    a {
      color: var(--white);
      text-decoration: underline;
      font-style: italic;
    }
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

export const Text = styled.p`
  font-family: 'Biotif', sans-serif;
  margin-top: 1rem;
  font-size: 2rem;
  color: #8f9ba8;
  width: 269px;
  font-weight: 400;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;

  animation: ${blinkCursor} 700ms steps(40) infinite normal;
  animation: ${typing} 4s steps(40) normal;
`

export const Highlight = styled.span`
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: underline;
    font-style: italic;
  }
`
