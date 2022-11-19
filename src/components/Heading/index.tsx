import { Container } from './styles'

interface Props {
  text: string
  size?: number
  className?: string
}

export function Heading({ text, size = 2.5, className }: Props) {
  return (
    <Container size={size} className={className}>
      {text}
    </Container>
  )
}
