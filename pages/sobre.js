import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Toast from '../components/Toast'
import stripHtml from '../lib/strip-html'
import items from '../data/about'
import Lottie from 'lottie-react'
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'

export async function getStaticProps() {
  const meta = {
    title: 'Sobre // Nicolas Teófilo',
    description:
      'Nicolas Teófilo é um desenvolvedor full-stack. Ele aprecia todas as etapas do desenvolvimento de softwares escaláveis e com qualidade. Atualmente é um desenvolvedor freelancer, trabalhando principalmente com Javascript.',
    tagline: 'Sobre mim',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple'
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const copyBioRef = React.useRef()
  const downloadRef = React.useRef()

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Nicolas"
            src="/static/images/nicolas-bw.png"
            width="300"
            height="300"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' }
            }}
          >
            Olá, tudo bem? <strong>Meu nome é Nicolas.</strong>
          </Paragraph>
          <Paragraph>
            Atualmente, sou <strong>desenvolvedor freelancer</strong>{' '}
            especializado em criar aplicações de alta qualidade utilizando
            tecnologias do ecossistema JavaScript, como Node.js e React.js.
            Tenho experiência e paixão por desenvolver soluções robustas e
            eficientes que atendem às necessidades dos meus clientes.
          </Paragraph>
          <Paragraph>
            Se precisar de um profissional comprometido e atualizado com as
            melhores práticas de desenvolvimento, estou à disposição para
            colaborar em seus projetos.
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} anos `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} ano `
    }

    durationStr += `${durationObj.months} meses`

    return durationStr
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nicolasteofilo.dev/about" property="og:url" />
        <meta
          content={`https://nicolasteofilo.dev${image}`}
          property="og:image"
        />
      </Head>

      {renderIntro()}

      <h2>Tecnologias</h2>

      <h2>Carreira</h2>
      {renderAll()}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' }
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' }
})

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center'
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '70%' }
})

About.Layout = Base

export default About
