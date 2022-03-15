import * as S from './styles'

export function Bio() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Bio</S.Title>
        <S.Phrase>Code. Coffe ☕</S.Phrase>
        <S.Title>Career</S.Title>

        {/* JOBS */}
        <S.Job>
          <S.HeadingJob>Front-end Developer</S.HeadingJob>
          <S.JobSection>
            <S.Company href="https://dotcoding.com.br/">DotCoding</S.Company>
            <S.Point>•</S.Point>
            <S.Text> Remote</S.Text>
          </S.JobSection>
          <S.Date>Oct 2021 - Present • 6 mos</S.Date>
        </S.Job>
      </S.Wrapper>
    </>
  )
}
