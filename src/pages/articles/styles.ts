import styled from 'styled-components'

interface WrapperParalaxProps {
  image: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 0;
`

export const Wrapper = styled.div`
  overflow: hidden;
  flex: 1 1;
`

export const Paralax = styled.main``

export const WrapperParalax = styled.div<WrapperParalaxProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image}) no-repeat;
  background-size: cover;
  align-items: center;
  height: 100vh;
  width: 100%;
  .content {
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background-color: transparent;

    h1 {
      background-color: transparent;
      font-size: 5rem;
      color: var(--white);
    }
  }
`

export const Body = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 32px;
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 20px 0px;
  color: #8d99a6;

  code {
    background-color: #141618;
    color: #8d99a6;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`
