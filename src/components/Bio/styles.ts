import styled from 'styled-components'

export const Wrapper = styled.main`
  margin-top: 7rem;

  > p {
    font-size: 1.6rem;
    font-family: 'Biotif';
    color: var(--gray);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`

export const Title = styled.h1`
  font-family: 'Biotif-SemiBold';
  font-size: 2.5rem;

  margin-top: 6rem;
`

export const Phrase = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Biotif';
  font-size: 1.6rem;
  font-weight: normal;
  margin-top: 1rem;
  border-left: 4px solid #212024;
  padding-left: 2rem;
  font-style: italic;
  color: var(--gray);
  max-width: 700px;
`

export const Job = styled.div`
  font-family: 'Biotif-SemiBold';
  margin-top: 1rem;
  font-size: 1rem;

  small {
    font-size: 1.5rem;
    font-family: 'Biotif';
  }
`

export const HeadingJob = styled.h2``

export const JobSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
`

export const Company = styled.a`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Biotif';
  display: inline;
  text-decoration: underline;
  font-size: 1.5rem;
  color: var(--white);
`

export const Text = styled.p`
  font-family: 'Biotif';
  font-size: 1.5rem;
  color: #8f9ba8;
`

export const Point = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Biotif-SemiBold';
  color: #8f9ba8;
  font-size: 1.5rem;
  margin: 0 0.5rem;
`

export const Date = styled.p`
  font-family: 'Biotif';
  font-size: 1.5rem;
  color: #8f9ba8;
`
