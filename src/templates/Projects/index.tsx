import { Heading } from 'components/Heading'
import { Title } from 'components/Title'
import { Container, Description, ProjectsContainer } from './styles'

type ProjectsProps = {
  title: string
}

export default function Projects({ title }: ProjectsProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>
        Eu realmente gosto muito de fazer projetos paralelos. Aqui você pode
        navegar por todos os meus <strong>websites, apps e templates</strong>{' '}
        que eu já fiz. Alguns projetos estão ativos e outros talves não.
      </Description>
      <Heading text="Todos Projetos" />
      <Heading className="project-year" text="2022" size={1.8} />
      <ProjectsContainer>
        <ul>
          <li>
            <a
              href="https://github.com/nicolasteofilo/template-nextjs"
              target="_blank"
              rel="noreferrer"
            >
              Next.Js Template
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nicolasteofilo/my-contacts"
              target="_blank"
              rel="noreferrer"
            >
              MyContacts
            </a>
          </li>
        </ul>
      </ProjectsContainer>
    </Container>
  )
}
