import * as S from './styles'

interface Props {
  children: React.ReactNode
  fistColor: string
  secondColor: string
}

export function Title({ children, fistColor, secondColor }: Props) {
  return (
    <>
      <S.Heading fistColor={fistColor} secondColor={secondColor}>
        {children}
      </S.Heading>
    </>
  )
}
