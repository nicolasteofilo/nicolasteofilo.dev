import styled from 'styled-components'

interface HeadingProps {
  fistColor: string
  secondColor: string
}

export const Heading = styled.h1<HeadingProps>`
  background-image: linear-gradient(
    135deg,
    ${(props) => props.fistColor} 0%,
    ${(props) => props.secondColor} 35%
  );

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  color: black;
  font-size: 4rem;

  margin-top: 2rem;
`
