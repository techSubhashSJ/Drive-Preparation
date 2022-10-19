import { gql } from "@apollo/client";
import ImageFragment from "../fragments/image";
import MenuFragment from "../fragments/menus";
import SeoFragment from "../fragments/seo";
import { HEADER_FOOTER } from "../getMenu";

/**
 * Get News Posts
 *
 */
export const GET_NEWS = gql`
 query GET_NEWS( $uri: String, $first: Int, $after: String ) {
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
  posts: posts(first: $first, after: $after) {
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
      hasNextPage
      endCursor
    }
  }
 }
 ${MenuFragment}
 ${ImageFragment}
 ${SeoFragment}
 `;
