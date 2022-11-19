import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  background-color: var(--background);
  color: #fff;

  @media (max-width: 1100px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  .project-year {
    margin-top: 3rem;
  }
`

export const Description = styled.p`
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3.4rem;
  max-width: 700px;

  font-family: 'Biotif';
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 2;
  color: var(--gray);

  strong {
    color: var(--white);
  }
`
export const ProjectsContainer = styled.div`
  margin-left: 2rem;

  ul {
    li {
      font-size: 14px;

      a {
        font-size: 16px;
        line-height: 32px;
        color: var(--white);
        text-decoration: underline;
      }

      &::marker {
        color: var(--gray);
      }
    }
  }
`
