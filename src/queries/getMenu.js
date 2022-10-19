import MenuFragment from "./fragments/menus";
import SeoFragment from "./fragments/seo";

const { gql } = require("@apollo/client");

export const HEADER_FOOTER = `header: getHeader {
  favicon
  siteLogoUrl
  siteTagLine
  siteTitle
}
headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
    }
  }
}
footer: getFooter {
  copyrightText
  sidebarOne
  sidebarTwo
  socialLinks {
    iconName
    iconUrl
  }
}`;

export const GET_MENUS = gql`
query GET_PAGE($uri: ID! ) {
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
