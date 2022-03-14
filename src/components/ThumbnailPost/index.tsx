import * as S from './styles'

export type Post = {
  id: string
  slug: string
  description: string
  heading: string
  createdAt: string
  createdBy: {
    id: string
    name: string
  }
  cover: {
    width: number
    height: number
    url: string
  }
}

export interface ThumbnailPostProps {
  posts: Post[]
}

export function ThumbnailPost({
  heading,
  cover,
  createdAt,
  createdBy,
  description
}: Post) {
  return (
    <>
      <S.Wrapper>
        <S.Background>
          <S.CoverImg src={cover.url} width={300} height={150} alt="" />
          <S.Heading>{heading}</S.Heading>
          <S.Description>{description}</S.Description>
        </S.Background>
      </S.Wrapper>
    </>
  )
}
