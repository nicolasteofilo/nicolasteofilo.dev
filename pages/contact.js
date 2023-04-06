import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Contact // Nicolas Teófilo',
    tagline: 'Email me. Just like old times.',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green'
  }

  return { props: meta }
}

function Contact(props) {
  const { title, image } = props
  const description = `I love talking to people in technology and content creators. So if you would like to talk, have an offer, opportunity or presentation that can make my life more interesting, send me an email at <strong>nicolasteofilodecastro@gmail.com.</strong> For the reasons mentioned above, I will only respond to proposals that coincide with my schedule and interests.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nicolasteofilo.dev/contact" property="og:url" />
        <meta
          content={`https://nicolasteofilo.dev${image}`}
          property="og:image"
        />
      </Head>

      <Box>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
    </>
  )
}

Contact.Layout = Base

export default Contact
