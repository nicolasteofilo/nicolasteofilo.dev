import { Header } from 'components/Header'
import { ThumbnailPost, ThumbnailPostProps } from 'components/ThumbnailPost'
import { client } from 'graphql/client'
import { GET_POSTS } from 'graphql/queries'
import { GridPosts } from 'styles/blog'

export default function Blog({ posts }: ThumbnailPostProps) {
  return (
    <>
      <Header />
      <GridPosts>
        {posts.map((post) => (
          <ThumbnailPost
            key={post.id}
            cover={post.cover}
            createdAt={post.createdAt}
            createdBy={post.createdBy}
            heading={post.heading}
            slug={post.slug}
            id={post.id}
            description={post.description}
          />
        ))}
        {posts.map((post) => (
          <ThumbnailPost
            key={post.id}
            cover={post.cover}
            createdAt={post.createdAt}
            createdBy={post.createdBy}
            heading={post.heading}
            slug={post.slug}
            id={post.id}
            description={post.description}
          />
        ))}
        {posts.map((post) => (
          <ThumbnailPost
            key={post.id}
            cover={post.cover}
            createdAt={post.createdAt}
            createdBy={post.createdBy}
            heading={post.heading}
            slug={post.slug}
            id={post.id}
            description={post.description}
          />
        ))}
        {posts.map((post) => (
          <ThumbnailPost
            key={post.id}
            cover={post.cover}
            createdAt={post.createdAt}
            createdBy={post.createdBy}
            heading={post.heading}
            slug={post.slug}
            id={post.id}
            description={post.description}
          />
        ))}
      </GridPosts>
    </>
  )
}

export const getStaticProps = async () => {
  const { posts } = await client.request(GET_POSTS)

  return {
    props: {
      posts
    }
  }
}
