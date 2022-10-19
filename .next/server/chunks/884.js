"use strict";
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 4869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore"
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
    }
};
const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
    resultCaching: false
});
const link = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
    uri: `${"http://nextjs-headless-wordpress.local"}/graphql`
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link,
    cache,
    defaultOptions
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 6569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/Facebook.js


const SvgFacebook = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        role: "img",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            style: {
                stroke: "none",
                fillRule: "nonzero",
                fill: "#fff",
                fillOpacity: 1
            },
            d: "M2.637 18h5.87v-6.398H6.399v-2.11h2.11V6.855a2.64 2.64 0 0 1 2.637-2.636h2.636v2.11h-2.11c-.581 0-1.054.472-1.054 1.054v2.11h3.07l-.351 2.109h-2.719V18h4.746A2.64 2.64 0 0 0 18 15.363V2.637A2.64 2.64 0 0 0 15.363 0H2.637A2.64 2.64 0 0 0 0 2.637v12.726A2.64 2.64 0 0 0 2.637 18ZM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582h-3.691v-4.289h2.555l.703-4.219h-3.258V7.383h3.164V3.164h-3.691a3.696 3.696 0 0 0-3.692 3.691v1.582h-2.11v4.22h2.11v4.288H2.637c-.871 0-1.582-.71-1.582-1.582Zm0 0"
        })
    });
/* harmony default export */ const Facebook = (SvgFacebook);

;// CONCATENATED MODULE: ./src/components/icons/Instagram.js


const SvgInstagram = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        role: "img",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fff",
                    fillOpacity: 1
                },
                d: "M2.637 18h12.726A2.64 2.64 0 0 0 18 15.363V2.637A2.64 2.64 0 0 0 15.363 0H2.637A2.64 2.64 0 0 0 0 2.637v12.726A2.64 2.64 0 0 0 2.637 18ZM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582Zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fff",
                    fillOpacity: 1
                },
                d: "M9 13.746A4.751 4.751 0 0 0 13.746 9 4.751 4.751 0 0 0 9 4.254 4.751 4.751 0 0 0 4.254 9 4.751 4.751 0 0 0 9 13.746ZM9 5.31A3.696 3.696 0 0 1 12.691 9 3.696 3.696 0 0 1 9 12.691 3.696 3.696 0 0 1 5.309 9 3.696 3.696 0 0 1 9 5.309ZM14.273 5.309c.872 0 1.582-.711 1.582-1.582 0-.872-.71-1.582-1.582-1.582-.87 0-1.582.71-1.582 1.582 0 .87.711 1.582 1.582 1.582Zm0-2.11a.53.53 0 0 1 .528.528.53.53 0 0 1-.528.527.53.53 0 0 1-.527-.527.53.53 0 0 1 .527-.528Zm0 0"
            })
        ]
    });
/* harmony default export */ const Instagram = (SvgInstagram);

;// CONCATENATED MODULE: ./src/components/icons/SearchIcon.js


const SvgSearchIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 24 24",
        role: "img",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
        })
    });
/* harmony default export */ const SearchIcon = ((/* unused pure expression or super */ null && (SvgSearchIcon)));

;// CONCATENATED MODULE: ./src/components/icons/Twitter.js


const SvgTwitter = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        role: "img",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            style: {
                stroke: "none",
                fillRule: "nonzero",
                fill: "#fff",
                fillOpacity: 1
            },
            d: "M18 1.969c-1.133.05-1.11.047-1.234.058L17.434.11s-2.09.774-2.622.91C13.418-.233 11.348-.288 9.864.622 8.653 1.367 8 2.648 8.22 4.145 5.859 3.816 3.87 2.695 2.3.813L1.805.215l-.371.68a4.142 4.142 0 0 0-.442 2.773c.078.379.207.742.387 1.082l-.426-.164-.05.71c-.051.724.19 1.567.644 2.259.129.195.293.406.5.617l-.219-.031.27.816a3.957 3.957 0 0 0 2.039 2.36c-.953.402-1.719.66-2.98 1.074L0 12.773l1.066.582c.407.223 1.844.965 3.262 1.188 3.156.496 6.711.09 9.102-2.063 2.015-1.816 2.675-4.394 2.539-7.082-.02-.406.09-.793.312-1.093.45-.594 1.715-2.332 1.719-2.336Zm-2.559 1.707a2.712 2.712 0 0 0-.523 1.777c.137 2.707-.602 4.809-2.191 6.246-1.864 1.672-4.864 2.332-8.235 1.801-.61-.094-1.242-.309-1.762-.523 1.06-.364 1.875-.688 3.196-1.313l1.84-.871-2.036-.129c-.972-.062-1.785-.535-2.28-1.305.265-.011.519-.054.773-.129l1.941-.539-1.957-.48a2.915 2.915 0 0 1-2.164-2.086c.195.05.422.09.793.125l1.809.18L3.21 5.313c-1.035-.81-1.45-2.02-1.145-3.184 3.227 3.348 7.012 3.094 7.395 3.183-.086-.816-.086-.816-.11-.894-.488-1.727.583-2.602 1.067-2.898 1.008-.622 2.605-.715 3.715.308a.95.95 0 0 0 .867.23c.27-.066.496-.14.71-.218l-.452 1.3h.582c-.11.15-.242.325-.399.536Zm0 0"
        })
    });
/* harmony default export */ const Twitter = (SvgTwitter);

;// CONCATENATED MODULE: ./src/components/icons/Youtube.js


const SvgYoutube = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        role: "img",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fff",
                    fillOpacity: 1
                },
                d: "M2.637 13.71h12.726A2.64 2.64 0 0 0 18 11.075V2.637A2.64 2.64 0 0 0 15.363 0H2.637A2.64 2.64 0 0 0 0 2.637v8.437a2.64 2.64 0 0 0 2.637 2.637ZM1.055 2.638c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v8.437c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582Zm0 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fff",
                    fillOpacity: 1
                },
                d: "M6.363 3.324v7.168l6.348-3.644Zm1.055 1.79 3.144 1.75-3.144 1.804Zm0 0"
            })
        ]
    });
/* harmony default export */ const Youtube = (SvgYoutube);

;// CONCATENATED MODULE: ./src/components/icons/index.js






;// CONCATENATED MODULE: ./src/utils/icons-map.js


const getIconComponentByName = (name)=>{
    const componentsMap = {
        facebook: Facebook,
        twitter: Twitter,
        youtube: Youtube,
        instagram: Instagram
    };
    if (name in componentsMap) {
        const IconComponent = componentsMap[name];
        return /*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {});
    } else {
        return null;
    }
};

// EXTERNAL MODULE: ./src/utils/miscellaneous.js
var miscellaneous = __webpack_require__(8301);
;// CONCATENATED MODULE: ./src/components/layout/footer/index.js






const Footer = ({ footerMenus , footer  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: " bg-teal-500 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " text-white flex flex-wrap -mx-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: (0,miscellaneous/* Sanitize */.o)(footer?.sidebarOne)
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: (0,miscellaneous/* Sanitize */.o)(footer?.sidebarTwo)
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3",
                        children: !external_lodash_default().isEmpty(footerMenus) && external_lodash_default().isArray(footerMenus) ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: footerMenus?.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: menu?.node?.path,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: menu?.node?.label
                                        })
                                    })
                                }, menu?.node?.id))
                        }) : null
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-8 mt-8 w-full flex flex-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full md:w-1/2 lg:w-1/4 text-white",
                        children: [
                            footer?.copyrightText ? footer?.copyrightText : "@Codeytek Academy 2020",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full lg:w-3/4 flex justify-end align-baseline",
                        children: !external_lodash_default().isEmpty(footer?.socialLinks) && external_lodash_default().isArray(footer?.socialLinks) ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex items-center",
                            children: footer?.socialLinks?.map((socialLink)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mx-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: socialLink?.iconUrl,
                                        children: getIconComponentByName(socialLink?.iconName)
                                    })
                                }, socialLink?.iconName))
                        }) : null
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer); //NOTE:Search for => dangerouslySetInnerHTML={{__html: footer?.sidebarOne}}


/***/ }),

/***/ 4509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layout/header/nav.js




const Nav = ({ headerMenus , header  })=>{
    const { 0: isMenuVisible , 1: setIsMenuVisible  } = (0,external_react_.useState)(false);
    if (external_lodash_default().isEmpty(headerMenus)) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex items-center justify-between flex-wrap bg-teal-500 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center flex-shrink-0 text-white mr-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: header?.favicon,
                        alt: "...",
                        height: "30px",
                        width: "30px",
                        className: "mr-4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-start justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-semibold text-xl tracking-tight",
                                children: header?.siteTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: header?.siteTagLine
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block lg:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",
                    onClick: ()=>setIsMenuVisible((flag)=>!flag),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "fill-current h-3 w-3",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: isMenuVisible ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto" : "hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto",
                children: [
                    headerMenus?.length ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-sm lg:flex-grow",
                        children: headerMenus?.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: menu?.node?.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",
                                    children: menu?.node?.label
                                })
                            }, menu?.node?.id))
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",
                            children: "Contact Us"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./src/components/layout/header/index.js




const Header = ({ headerMenus , header  })=>{
    if (external_lodash_default().isEmpty(headerMenus)) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(nav, {
            headerMenus: headerMenus,
            header: header
        })
    });
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 4913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MenuFragment = `
fragment MenuFragment on MenuItem {
    id
    label
    url
    path
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuFragment);


/***/ }),

/***/ 1615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SeoFragment = `
fragment SeoFragment on PostTypeSEO {
      breadcrumbs {
        text
        url
      }
      title
      metaDesc
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphAuthor
      opengraphDescription
      opengraphTitle
      schemaDetails
      opengraphImage {
        sourceUrl
      }
      opengraphSiteName
      opengraphPublishedTime
      opengraphModifiedTime
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
      }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoFragment);


/***/ }),

/***/ 8541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ HEADER_FOOTER),
/* harmony export */   "l": () => (/* binding */ GET_MENUS)
/* harmony export */ });
/* harmony import */ var _fragments_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4913);
/* harmony import */ var _fragments_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1615);


const { gql  } = __webpack_require__(9114);
const HEADER_FOOTER = `header: getHeader {
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
const GET_MENUS = gql`
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
${_fragments_menus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}
${_fragments_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}
`;


/***/ }),

/***/ 8301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Sanitize)
/* harmony export */ });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1320);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */ const Sanitize = (content)=>{
    return  false ? 0 : content;
};


/***/ })

};
;