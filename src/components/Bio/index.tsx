import * as S from './styles'

export function Bio() {
  return (
    <>
      <S.Wrapper>
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
