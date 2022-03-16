import styled from 'styled-components'

export const Wrapper = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.8rem;
  &:hover {
    background-color: #212024;
  }

  transition: all 0.3s ease-in-out;
`

export const Heading = styled.h1`
  color: var(--white);
  background-color: transparent;
  font-family: 'Biotif-SemiBold';

  font-weight: bold;

  margin-top: 2rem;
  letter-spacing: 0.15rem;
`

export const Description = styled.p`
  background-color: transparent;
  font-family: 'Biotif';
  font-weight: 200;
  color: #8f9ba8;
  display: flex;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  max-width: 40rem;
  letter-spacing: 0.1rem;
`

export const CoverImg = styled.img`
  border-radius: 1rem;

  background-size: 50rem 7rem;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Info = styled.div`
  display: flex;
  background-color: transparent;

  gap: 1rem;
`

export const Point = styled.h1`
  background-color: transparent;
  color: var(--white);

  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.4rem;
`

export const Date = styled.p`
  margin-top: 1rem;
  background-color: transparent;
  font-weight: 100;
  font-size: 1.5rem;
  color: var(--white, #fff);
  font-family: 'Biotif';
`

export const ReadTime = styled.p`
  margin-top: 1rem;
  background-color: transparent;
  font-weight: 100;
  font-size: 1.5rem;
  color: var(--white, #fff);
  font-family: 'Biotif';
`
