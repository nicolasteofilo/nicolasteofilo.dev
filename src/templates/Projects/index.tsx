import { Title } from 'components/Title'
import { Container, Description } from './styles'

type ProjectsProps = {
  title: string
}

export default function Projects({ title }: ProjectsProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>
        Eu realmente gosto muito de fazer projetos paralelos. Aqui você pode
        navegar por todos os meus <strong>websites, apps e templates</strong>{' '}
        que eu já fiz. Alguns projetos estão ativos e outros talves não.
      </Description>
    </Container>
  )
}
