import { gql } from '@apollo/client'
import ImageFragment from '../fragments/image';
import MenuFragment from '../fragments/menus';
import SeoFragment from '../fragments/seo';
import { HEADER_FOOTER } from '../getMenu';

/**
 * Get Posts
 *
 */
export const GET_POSTS = gql`
 query GET_POSTS( $uri: String, $perPage: Int, $offset: Int ) {
 ${HEADER_FOOTER}
  page: pageBy(uri: $uri) {
    id
    title
    content
    slug
    uri
    seo {
      ...SeoFragment
    }
  }
  posts: posts(where: { offsetPagination: { size: $perPage, offset: $offset }}) {
    edges {
      node {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            ...ImageFragment
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
 }
 ${MenuFragment}
 ${ImageFragment}
 ${SeoFragment}
 `;

export const GET_TOTAL_POSTS_COUNT = gql`
  query GET_TOTAL_POSTS_COUNT {
  postsCount: posts {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`

/**
 * Get post slugs.
 *
 */
export const GET_POST_SLUGS = gql`
 query GET_POST_SLUGS {
  posts: posts {
    nodes {
      id
      slug
    }
  }
 }
 `;