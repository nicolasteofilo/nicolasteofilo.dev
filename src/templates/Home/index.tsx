import { Title } from 'components/Title'
import { Biography } from './components/Biography'
import { Carrer } from './components/Carrer'
import { Container, HiMessage } from './styles'

type HomeProps = {
  title: string
}

export function Home({ title }: HomeProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <HiMessage>
        Olá, eu sou <span>Nicolas Teófilo</span> 👋🏻
      </HiMessage>
      <Biography />
      <Carrer />
    </Container>
  )
}
