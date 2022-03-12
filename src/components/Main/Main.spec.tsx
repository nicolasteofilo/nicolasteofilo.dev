import { screen, render } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /Typescript, ReactJS, NextJS and Styled Components Template/i
      })
    ).toBeInTheDocument()
  }),
    it('should render correct', () => {
      const { container } = render(<Main />)

      expect(container.firstChild).toMatchSnapshot()
    })
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
