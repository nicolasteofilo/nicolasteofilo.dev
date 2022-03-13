import { Header } from 'components/Header'
import { client } from 'graphql/client'
import { GET_POSTS } from 'graphql/queries'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <Header />
  </S.Wrapper>
)

export { Main }
