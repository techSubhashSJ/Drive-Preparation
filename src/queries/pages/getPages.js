import { gql } from "@apollo/client";
import { PAGES_COUNT } from "../../utils/slugs";

//Pull out fisrt 10 pages
export const GET_PAGES_URI = gql`
  query getPagesUri {
   pages: pages(first: ${PAGES_COUNT}) {
      nodes {
        id
        uri
        children {
          nodes {
            id
            uri
          }
        }
      }
    }
  }
`;
