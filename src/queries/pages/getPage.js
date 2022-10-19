import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import SeoFragment from "../fragments/seo";
import { HEADER_FOOTER } from "../getMenu";

export const GET_PAGE = gql`
	query GET_PAGE($uri: ID!) {
      ${HEADER_FOOTER}
	  page: page(id: $uri, idType: URI) {
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

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HEADER_FOOTER}
	  page(idType: DATABASE_ID, id: $id) {
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
