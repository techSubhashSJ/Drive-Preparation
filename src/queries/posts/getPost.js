import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import SeoFragment from "../fragments/seo";
import { HEADER_FOOTER } from "../getMenu";

export const GET_POST = gql`
	query GET_POST($uri: String) {
      ${HEADER_FOOTER}
	  post: postBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
      }
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;

export const GET_POST_BY_ID = gql`
	query GET_POST_BY_ID($id: ID!) {
		${HEADER_FOOTER}
	  post(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
		status
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;
