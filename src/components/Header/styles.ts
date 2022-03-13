import styled from 'styled-components'

export const Wrapper = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  nav {
    margin-left: 3rem;
    height: 5rem;

    a {
      font-size: 1.5rem;
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      font-weight: bold;
      color: var(--white);

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        border-bottom: 1px solid gray;
      }
    }
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    .contact {
      display: none;
    }
  }
`

export const Logo = styled.h1`
  font-size: 3rem;
  font-family: 'Source Code Pro' !important;
  font-weight: bold;
  font-style: italic;
`

export const SocialSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;

  a {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: var(--gray-800);
    text-decoration: none;
    transition: color 0.2s;

    svg {
      color: #b5b3b9;

      &:hover {
        color: var(--white);
      }
    }
  }
`
