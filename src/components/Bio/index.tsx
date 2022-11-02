import * as S from './styles'

export function Bio() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Bio</S.Title>
        <p>Entusiasta de desenvolvimento com as melhores tecnologias!</p>
        <S.Phrase>
          Nicolas Teófilo é um desenvolvedor de software. Atualmente vivendo em
          Ribeirão Preto, São Paulo. Um admirador de desenvolvimento e
          compartilhamento de conhecimento! Atualmente trabalhando como
          desenvolvedor independente, mas sempre disposto a novos desafios.
        </S.Phrase>
        <S.Title>Carreira</S.Title>
        <S.Job>
          <S.HeadingJob>Front-end Developer</S.HeadingJob>
          <S.JobSection>
            <S.Company href="https://dotcoding.com.br" target="_blank">
              DotCoding
            </S.Company>
            <S.Point>•</S.Point>
            <S.Text> Remote, Brasil</S.Text>
          </S.JobSection>
          <S.Date>Oct 2021 – Sep 2022 • 1 yr</S.Date>
        </S.Job>
      </S.Wrapper>
    </>
  )
}
