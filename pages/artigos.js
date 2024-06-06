import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { getAllPosts } from '../lib/blog'
import ListItem from '../components/ListItem'
import FeaturedArticle from '../components/FeaturedArticle'
import { ListGroup } from '../components/ListGroup'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title'])

  return {
    props: {
      title: 'Artigos',
      tagline: '',
      image: '/static/images/pen-opt.jpg',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      allPosts
    }
  }
}

function Articles(props) {
  function renderAll() {
    if(props.allPosts) {
      if (props?.allPosts?.length) {
        return props.allPosts.map((post, index) => {
          if (!post.skip) {
            return (
              <ListItem
                key={index}
                index={index}
                href={`/${post.slug}/`}
                title={post.title}
                date={post.date}
              />
            )
          }
        })
      }
    }
    return null;
  }

  const {
    title,
    image
  } = props
  const description = `Aqui você pode encontrar os <strong>${props.allPosts.length} artigos</strong> que eu escrevi. Aqui você lerá sobre desenvolvimento web, engenharia de software e tecnologia em geral!. Espero que você goste :)`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nicolasteofilo.dev/artigos" property="og:url" />
        <meta
          content={`https://nicolasteofilo.dev${image}`}
          property="og:image"
        />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <h2>Artigos</h2>
        {props.allPosts.length > 0 ? <ListGroup>{renderAll()}</ListGroup> : <p>Nenhum artigo encontrado aqui ainda :)</p>}
      </AnimateSharedLayout>
    </>
  )
}

const FeaturedArticles = styled('div', {
  margin: '10px 0 0 -20px',
  '@bp2': { display: 'flex', justifyContent: 'space-between' },
})

Articles.Layout = Base

export default Articles
