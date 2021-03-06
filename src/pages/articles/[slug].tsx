/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Header } from 'components/Header'
import { Post } from 'components/ThumbnailPost'
import { client } from 'graphql/client'
import { GET_POSTS_WITH_LIMIT, GET_POST_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import * as S from 'styles/article'

interface PlaceProps {
  post: Post
}

export default function Article({ post }: PlaceProps) {
  return (
    <>
      <Head>
        <title>{post?.heading || 'Nicolas Teófio'}</title>
        <meta name="description" content={post?.body?.text} />
      </Head>
      <S.Container>
        <S.WrapperParalax image={post?.cover?.url}>
          <Header />
          <div className="content">
            <h1>{post?.heading}</h1>
          </div>
        </S.WrapperParalax>
        <S.Wrapper>
          <S.Body dangerouslySetInnerHTML={{ __html: post?.body?.html }} />
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export async function getStaticPaths() {
  const { posts } = await client.request(GET_POSTS_WITH_LIMIT, {
    first: 5
  })

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<PlaceProps>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!post) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      post
    }
  }
}
