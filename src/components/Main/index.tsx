import { Bio } from 'components/Bio'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { Description } from './Description'
import * as S from './styles'

const Main = () => (
  <>
    <Header />
    <S.Wrapper>
      <Title fistColor="#81FCEB" secondColor="#ffff80">
        Sobre mim
      </Title>
      <Description />
      <Bio />
    </S.Wrapper>
  </>
)

export { Main }
