import styled from 'styled-components'

interface HeadingProps {
  size: number
}

export const Container = styled.h2<HeadingProps>`
  margin-bottom: 1rem;
  font-family: 'Biotif-SemiBold';
  font-size: ${({ size }) => `${size}rem`};
`
