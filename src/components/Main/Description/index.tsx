import Link from 'next/link'
import * as S from '../styles'

export function Description() {
  return (
    <S.Text>
      Olá, me chamo <S.Highlight>Nicolas</S.Highlight> 👋🏻 <br />
      Sou programador front-end, e gosto muito de software. <br />
      <br />
      Atualmente trabalho como desenvolvedor na{' '}
      <S.Highlight>DotCoding</S.Highlight> e tenho experiência com:{' '}
      <p>React, TypeScript, Styled-Components...</p>
      <br />
      <br />
      Também gosto muito de produzir conteúdo para o{' '}
      <S.Highlight>
        <a href="https://www.youtube.com/channel/UCFchnQGZR9YF9ATnQ_zaY_A">
          YouTube
        </a>
      </S.Highlight>
      ,{' '}
      <S.Highlight>
        <a href="https://www.instagram.com/onicolasteofilo/">Instagram</a>
      </S.Highlight>
      , e também para o meu{' '}
      <S.Highlight>
        <Link href="/articles">
          <a href="/articles">blog</a>
        </Link>
      </S.Highlight>{' '}
      que se encontra nesta página
    </S.Text>
  )
}
