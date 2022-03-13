import { Main } from 'components/Main'
import { client } from 'graphql/client'
import { GET_POSTS } from 'graphql/queries'

export default function Home() {
  return <Main />
}

export const getStaticProps = async () => {
  console.log(process.env.GRAPHQL_HOST)
  console.log(process.env.GRAPHCMS_API_TOKEN)
  const { posts } = await client.request(GET_POSTS)

  console.log('posts', JSON.stringify(posts, null, 2))

  return {
    props: {
      posts
    }
  }
}
