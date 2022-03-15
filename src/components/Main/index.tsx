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
        About Me
      </Title>
      <S.CardInfo>
        <S.Avatar src="https://github.com/nicolasteofilo.png" alt="" />
        <Description />
      </S.CardInfo>
      <Bio />
    </S.Wrapper>
  </>
)

export { Main }
