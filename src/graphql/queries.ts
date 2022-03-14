import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      heading
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
