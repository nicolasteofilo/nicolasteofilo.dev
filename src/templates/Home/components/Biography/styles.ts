import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 7rem;

  h2 {
    margin-bottom: 1rem;
    font-family: 'Biotif-SemiBold';
    font-size: 2.5rem;
  }

  small {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    font-family: 'Biotif';
    color: var(--gray);
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    padding-left: 2rem;
    max-width: 700px;

    font-family: 'Biotif';
    font-size: 1.6rem;
    font-weight: normal;
    font-style: italic;
    color: var(--gray);

    border-left: 4px solid #212024;
  }
`
