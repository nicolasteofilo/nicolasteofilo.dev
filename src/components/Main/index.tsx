import { Bio } from 'components/Bio'
import { Title } from 'components/Title'
import { Description } from './Description'

import { Container } from './styles'

export function Main() {
  return (
    <>
      <Container>
        <Title>Sobre mim</Title>
        <Description />
        <Bio />
      </Container>
    </>
  )
}
