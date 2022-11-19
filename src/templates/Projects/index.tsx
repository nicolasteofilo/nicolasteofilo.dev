import { Title } from 'components/Title'
import { Container } from './styles'

type ProjectsProps = {
  title: string
}

export default function Projects({ title }: ProjectsProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
