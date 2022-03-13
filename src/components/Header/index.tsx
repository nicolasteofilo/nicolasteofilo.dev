import * as S from './styles'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  function isActive(pathname: string) {
    console.log(router?.asPath)
    return pathname === router?.asPath ? true : false
  }

  return (
    <>
      <S.Wrapper>
        <S.HeaderContent>
          <S.Links>
            <S.Logo>NT</S.Logo>
            <nav>
              <Link href={'/'}>
                <S.Anchor href="/" active={isActive('/')}>
                  HOME
                </S.Anchor>
              </Link>
              <Link href={'#'}>
                <S.Anchor className="contact">CONTATO</S.Anchor>
              </Link>
              <Link href={'/blog'} prefetch>
                <S.Anchor>BLOG</S.Anchor>
              </Link>
            </nav>
          </S.Links>
          <S.SocialSection>
            <a
              href="https://github.com/nicolasteofilo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolasteofilo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/onicolateofilo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={20} />
            </a>
          </S.SocialSection>
        </S.HeaderContent>
      </S.Wrapper>
    </>
  )
}
