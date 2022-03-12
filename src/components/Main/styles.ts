import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  code {
    font-style: italic;
    background-color: #666666;
    padding: 0.2rem;
    border-radius: 5px;
  }
`

export const Logo = styled.img`
  width: 15rem;
  margin: 0 auto;
  margin-bottom: 20px;
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

export const Disclaimer = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
