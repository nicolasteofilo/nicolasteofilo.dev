import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 7rem;
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 3rem;
    font-family: 'Biotif-SemiBold';
    font-size: 2.5rem;
  }
`

export const CardJob = styled.div`
  font-family: 'Biotif-SemiBold';
  margin-top: 1rem;
  font-size: 1.5rem;

  h3 {
    font-size: 1.5rem;
  }

  .company-detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 200;

    a {
      display: inline;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-family: 'Biotif';
      text-decoration: underline;
      color: var(--white);
    }

    small {
      color: var(--gray);
      margin: 0 0.5rem;
    }

    p {
      font-family: 'Biotif';
      color: var(--gray);
    }
  }

  .date {
    small {
      font-family: 'Biotif';
      font-size: 1.5rem;
      color: var(--gray);
    }
  }

  & + & {
    margin-top: 4rem;
  }
`
