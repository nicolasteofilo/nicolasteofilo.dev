import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      heading
      body {
        text
      }
      description
      cover {
        width
        height
        url
      }
      slug
      createdAt
      updatedAt
      createdBy {
        id
        name
      }
    }
  }
`

export const GET_POSTS_WITH_LIMIT = gql`
  query getPosts($first: Int) {
    posts(first: $first) {
      id
      heading
      body {
        text
      }
      description
      cover {
        width
        height
        url
      }
      slug
      createdAt
      updatedAt
      createdBy {
        id
        name
      }
    }
  }
`

export const GET_TOTAL_POSTS = gql`
  query getTotalPosts {
    posts {
      id
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      createdAt
      heading
      body {
        html
      }
      cover {
        width
        height
        url
      }
      updatedAt
    }
  }
`
