import Link from 'next/link'
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
  body: {
    text: string
    html: string
  }
  cover: {
    url: string
    width: number
    height: number
  }
}

export interface ThumbnailPostProps {
  posts: Post[]
}

export function ThumbnailPost({
  heading,
  cover,
  createdAt,
  body,
  description,
  slug
}: Post) {
  function descriptionToShow() {
    if (description.length > 100) {
      return `${description.substring(0, 100)}...`
    }
    return description
  }

  function readTimeToShow() {
    const words = body?.text?.split(' ').length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  return (
    <>
      <Link href={`/articles/${slug}`}>
        <S.Wrapper>
          <S.Background>
            <S.CoverImg src={cover.url} width={300} height={150} alt="" />
            <S.Heading>{heading}</S.Heading>
            <S.Description>{descriptionToShow()}</S.Description>
            <S.Info>
              <S.Date>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
              </S.Date>
              <S.Point>.</S.Point>
              <S.ReadTime>{readTimeToShow()}</S.ReadTime>
            </S.Info>
          </S.Background>
        </S.Wrapper>
      </Link>
    </>
  )
}
