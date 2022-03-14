import { Header } from 'components/Header'
import { ThumbnailPost, ThumbnailPostProps } from 'components/ThumbnailPost'
import { client } from 'graphql/client'
import { GET_POSTS, GET_TOTAL_POSTS } from 'graphql/queries'
import * as S from 'styles/blog'

interface BlogProps {
  totalPosts: number
}

export default function Blog(
  { posts }: ThumbnailPostProps,
  totalPosts: number
) {
  // console.log(totalPosts)

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Heading>Tech. Development</S.Heading>
        <br />
        <S.Description>
          Here you will find all my
          <S.CountPosts>{posts.length.toString()} articles</S.CountPosts> about
          development, technology and more.
        </S.Description>
        <S.Description>
          I mainly talk about the javascript world like Nodejs, React and et
          cetera
        </S.Description>
      </S.Wrapper>
      <S.GridPosts>
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
            body={post.body}
          />
        ))}
      </S.GridPosts>
    </>
  )
}

export const getStaticProps = async () => {
  const { posts } = await client.request(GET_POSTS)
  const { posts: ids } = await client.request(GET_TOTAL_POSTS)

  const totalPosts = ids.length

  return {
    props: {
      posts,
      totalPosts
    }
  }
}
