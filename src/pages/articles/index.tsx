import { Header } from 'components/Header'
import { ThumbnailPost, ThumbnailPostProps } from 'components/ThumbnailPost'
import { Title } from 'components/Title'
import { client } from 'graphql/client'
import { GET_POSTS, GET_TOTAL_POSTS } from 'graphql/queries'
import * as S from 'styles/blog'

export default function Blog({ posts }: ThumbnailPostProps) {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Title fistColor="#ff80bf" secondColor="#0080ff">
          Tech. Development
        </Title>
        <br />
        <S.Description>
          Aqui você encontrará todos os meus{' '}
          <strong>{posts.length.toString()} artigo(s)</strong> sobre
          desenvolvimento, tecnologia e muito mais. Eu falo principalmente sobre
          o mundo javascript como Nodejs, React e etc.
        </S.Description>
        {/* <S.Description></S.Description> */}
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
