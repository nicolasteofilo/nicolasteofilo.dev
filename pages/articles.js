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
      title: 'Articles // Nicolas Teófilo',
      tagline: 'Stories. Updates. Guides.',
      image: '/static/images/pen-opt.jpg',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      allPosts
    }
  }
}

function Articles(props) {
  const renderFeatured = () => {
    return props.featuredPosts.map((post, index) => {
      return (
        <FeaturedArticle
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      )
    })
  }

  const renderAll = () => {
    return props.allposts.length > 0 ? props.allposts.map((post, index) => {
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
    }) : null
  }

  const {
    title,
    image
  } = props
  const description = `Here you can find all <strong>${props.allPosts.length} articles</strong> I've written. You can read about web development, software engineering and technology careers in English and Portuguese (mainly Portuguese). I hope you enjoy :)`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nicolasteofilo.dev/articles" property="og:url" />
        <meta
          content={`https://nicolasteofilo.dev${image}`}
          property="og:image"
        />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Articles</h2>
        {props.allPosts.length > 0 ? <ListGroup>{renderAll()}</ListGroup> : <p>No articles found here yet :)</p>}
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
