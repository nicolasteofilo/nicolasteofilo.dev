import { Title } from 'components/Title'

import { Biography } from './components/Biography'
import { Carrer } from './components/Carrer'

import { Container, HiMessage } from './styles'

export function Main() {
  return (
    <>
      <Container>
        <Title>Sobre mim</Title>
        <HiMessage>
          Olá, eu sou <span>Nicolas Teófilo</span> 👋🏻
        </HiMessage>
        <Biography />
        <Carrer />
      </Container>
    </>
  )
}
