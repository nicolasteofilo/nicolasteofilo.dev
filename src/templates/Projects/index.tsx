import projects from 'data/projects.json'

type ProjectsProps = {
  title: string
}

export default function Projects({ title }: ProjectsProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Eu realmente gosto muito de fazer projetos paralelos. Aqui você pode
        navegar por todos os meus <strong>websites, apps e templates</strong>{' '}
        que eu já fiz. Alguns projetos estão ativos e outros talves não.
      </p>
      <h1>Todos Projetos</h1>
      <h2>2022</h2>
      <div>
        <ul>
          {projects
            .filter((project) => project.year === '2022')
            .map((project) => (
              <li key={project.year}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
