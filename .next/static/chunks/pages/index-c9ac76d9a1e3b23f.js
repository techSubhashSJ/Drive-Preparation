(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(227)}])},227:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return p},default:function(){return l}});var r=t(5893),o=t(4387),i=t(7297),a=t(7283),u="\nfragment MenuFragment on MenuItem {\n    id\n    label\n    url\n    path\n}\n",s="\nfragment SeoFragment on PostTypeSEO {\n      breadcrumbs {\n        text\n        url\n      }\n      title\n      metaDesc\n      metaRobotsNoindex\n      metaRobotsNofollow\n      opengraphAuthor\n      opengraphDescription\n      opengraphTitle\n      schemaDetails\n      opengraphImage {\n        sourceUrl\n      }\n      opengraphSiteName\n      opengraphPublishedTime\n      opengraphModifiedTime\n      twitterTitle\n      twitterDescription\n      twitterImage {\n        sourceUrl\n      }\n}\n";function c(){var n=(0,i.Z)(["\nquery GET_PAGE($uri: ID! ) {\n    ","\n  page: page(id: $uri, idType: URI) {\n    id\n    title\n    content\n    slug\n    uri\n    seo {\n        ...SeoFragment\n      }\n  }\n}\n","\n","\n"]);return c=function(){return n},n}var d='header: getHeader {\n  favicon\n  siteLogoUrl\n  siteTagLine\n  siteTitle\n}\nheaderMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {\n  edges {\n    node {\n      ...MenuFragment\n      childItems {\n        edges {\n          node {\n            ...MenuFragment\n          }\n        }\n      }\n    }\n  }\n}\nfooterMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {\n  edges {\n    node {\n      ...MenuFragment\n    }\n  }\n}\nfooter: getFooter {\n  copyrightText\n  sidebarOne\n  sidebarTwo\n  socialLinks {\n    iconName\n    iconUrl\n  }\n}';(0,t(3570).Ps)(c(),d,u,s);function g(){var n=(0,i.Z)(["\n\tquery GET_PAGE($uri: ID!) {\n      ","\n\t  page: page(id: $uri, idType: URI) {\n\t    id\n\t    title\n\t    content\n\t    slug\n\t    uri\n\t    seo {\n          ...SeoFragment\n        }\n\t  }\n\t}\n\t","\n\t","\n"]);return g=function(){return n},n}(0,a.Ps)(g(),d,u,s);var p=!0;function l(n){var e=n.data;return(0,r.jsx)(o.Z,{data:e,children:"content"})}}},function(n){n.O(0,[662,365,529,644,387,774,888,179],(function(){return e=5557,n(n.s=e);var e}));var e=n.O();_N_E=e}]);