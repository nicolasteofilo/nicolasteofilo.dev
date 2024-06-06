import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import FeaturedProject from '../components/FeaturedProject'
import stripHtml from '../lib/strip-html'
import { items, featured } from '../data/projects'

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Nicolas Teófilo',
    tagline: 'Projetos',
    image: '/static/images/projects.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green'
  }

  return { props: meta }
}

function Projects(props) {
  const renderFeatured = () => {
    return items
      .map((item) => {
        return item.projects.filter((project) =>
          featured.includes(project.title)
        )
      })
      .filter((item) => {
        if (item.length > 0) {
          return item
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <ProjectItem key={pIndex} project={project} />
            })}
          </ul>
        </div>
      )
    })
  }

  const { title, image } = props
  const description = `Uma das minhas atividade preferidas é desenvolver projetos, onde eu possa me aprofundar em novas tecnologias. Aqui você pode encontrar alguns dos meus principais projetos públicos que eu desenvolvi. Alguns deles estão ativos e outros não mais!`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nicolasteofilo.dev/projetos" property="og:url" />
        <meta
          content={`https://nicolasteofilo.dev${image}`}
          property="og:image"
        />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Todos os Projetos</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </>
  )
}

function ProjectItem(props) {
  const { project } = props

  return (
    <li>
      <a href={project.url} target="_blank">
        {project.title}
      </a>
      <br />
      {project.description}
    </li>
  )
}

Projects.Layout = Base

export default Projects
