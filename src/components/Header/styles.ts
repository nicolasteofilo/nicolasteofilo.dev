import styled from 'styled-components'

interface AnchorProps {
  active?: boolean
}

export const Wrapper = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
  background-color: transparent;
`

export const HeaderContent = styled.div`
  background-color: transparent;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  nav {
    background-color: transparent;
    margin-left: 3rem;

    @media (max-width: 768px) {
      overflow-x: scroll;
      display: flex;
    }
  }
`

export const Anchor = styled.a<AnchorProps>`
  background-color: transparent;

  background-color: transparent;
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  font-weight: thin;
  color: ${({ active }) => (active ? 'var(--gray)' : 'var(--white)')};

  cursor: pointer;

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: var(--white);
  }
`

export const Links = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    overflow-x: scroll;
    display: flex;

    margin-right: 0.5rem;
  }
`
export const Logo = styled.h1`
  background-color: transparent;
  font-size: 3rem;
  font-family: 'Source Code Pro' !important;
  font-weight: bold;
  font-style: italic;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

export const SocialSection = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    background-color: transparent;
    margin-left: 1rem;
    font-size: 1.5rem;
    color: var(--gray-800);
    text-decoration: none;
    transition: color 0.2s;

    svg {
      color: #b5b3b9;
      background-color: transparent;

      &:hover {
        color: var(--white);
      }

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }
`
