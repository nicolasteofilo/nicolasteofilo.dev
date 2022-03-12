import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/nextjs.png"
      alt="Logo do frameword nextjs e escrito NextJs na Prática ao lado"
    />
    <S.Description>
      Typescript, ReactJS, NextJS and Styled Components <span>Template</span>
    </S.Description>
    <S.Disclaimer>
      Edit <code>src/components/Main/index.tsx</code> and save to update.
    </S.Disclaimer>
  </S.Wrapper>
)

export { Main }
