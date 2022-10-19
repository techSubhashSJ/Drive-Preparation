"use strict";
exports.id = 400;
exports.ids = [400];
exports.modules = {

/***/ 4387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/miscellaneous.js
var miscellaneous = __webpack_require__(8301);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/seo/index.js



/**
 * Custom SEO component
 *
 * Used to seo meta tags for each page
 *
 * @param {Object} seo Seo.
 * @param {string} uri Page URI.
 * @see https://www.npmjs.com/package/next-seo
 *
 * @returns {JSX.Element}
 *
 */ const Seo = ({ seo , uri  })=>{
    const { title , metaDesc , metaRobotsNoindex , metaRobotsNofollow , opengraphDescription , opengraphTitle , opengraphImage , opengraphSiteName ,  } = seo;
    const currentLocation =  false ? 0 : null;
    const opengraphUrl = ( true ? "http://localhost:3000" : 0) + uri;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
        title: title,
        description: opengraphDescription || metaDesc,
        canonical: opengraphUrl,
        noindex: metaRobotsNoindex,
        nofollow: metaRobotsNofollow,
        openGraph: {
            type: "website",
            locale: "en_US",
            url: opengraphUrl,
            title: opengraphTitle,
            description: opengraphDescription,
            images: [
                {
                    url: opengraphImage?.sourceUrl,
                    width: 1280,
                    height: 720
                }, 
            ],
            /* eslint-disable */ site_name: opengraphSiteName
        },
        twitter: {
            handle: "@Codeytek",
            site: "@Codeytek",
            cardType: "summary_large_image"
        }
    });
};
Seo.propTypes = {
    seo: (external_prop_types_default()).object
};
Seo.defaultProps = {
    seo: {
        canonical: "",
        title: "",
        metaDesc: "",
        metaRobotsNoindex: "",
        metaRobotsNofollow: "",
        opengraphDescription: "",
        opengraphTitle: "",
        opengraphImage: {
            sourceUrl: ""
        },
        opengraphUrl: "",
        opengraphSiteName: ""
    }
};
/* harmony default export */ const seo = (Seo);

// EXTERNAL MODULE: ./src/components/layout/footer/index.js + 7 modules
var layout_footer = __webpack_require__(6569);
// EXTERNAL MODULE: ./src/components/layout/header/index.js + 1 modules
var layout_header = __webpack_require__(4509);
;// CONCATENATED MODULE: ./src/components/layout/index.js








const Layout = ({ data , children  })=>{
    if (external_lodash_default().isEmpty(data?.page)) {
        return null;
    }
    const { page , header , footer , headerMenus , footerMenus  } = data || {};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo, {
                seo: page?.seo,
                uri: page?.uri
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: header?.favicon
                    }),
                    page?.seo?.schemaDetails && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "application/ld+json",
                        className: "yoast-schema-graph",
                        dangerouslySetInnerHTML: {
                            __html: (0,miscellaneous/* Sanitize */.o)(page?.seo?.schemaDetails)
                        }
                    }, "yoastSchema")
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_header/* default */.Z, {
                headerMenus: headerMenus.edges,
                header: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-almost-screen",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_footer/* default */.Z, {
                footerMenus: footerMenus.edges,
                footer: footer
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 3251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ GET_PAGE)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments_menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4913);
/* harmony import */ var _fragments_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1615);
/* harmony import */ var _getMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8541);




const GET_PAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
	query GET_PAGE($uri: ID!) {
      ${_getMenu__WEBPACK_IMPORTED_MODULE_1__/* .HEADER_FOOTER */ .H}
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
	${_fragments_menus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}
	${_fragments_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z}
`;


/***/ }),

/***/ 5648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cd": () => (/* binding */ handleRedirectsAndReturnData),
/* harmony export */   "RO": () => (/* binding */ PAGES_COUNT),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jd": () => (/* binding */ FALLBACK)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const FALLBACK = "blocking";
const PAGES_COUNT = 100;
const isCustomPageUri = (uri)=>{
    const pagesToExclude = [
        "/"
    ];
    return pagesToExclude.includes(uri);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCustomPageUri);
const handleRedirectsAndReturnData = (defaultProps, data, errors, field, isPreview = false, loginRedirectURL = "")=>{
    // if (isPreview && null === data?.[field]) {
    //   return {
    //     redirect: {
    //       destination: loginRedirectURL || "/",
    //       statusCode: 307,
    //     },
    //   };
    // }
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(data)) {
        return {
            redirect: {
                destination: "/503",
                statusCode: 301
            }
        };
    }
    if (field && lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(data?.[field])) {
        return {
            // returns the default 404 page with a status code of 404
            notFound: true
        };
    }
    return defaultProps;
};


/***/ })

};
;