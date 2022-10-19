"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 9408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/apollo/client.js
var client = __webpack_require__(4869);
// EXTERNAL MODULE: ./src/components/layout/index.js + 1 modules
var layout = __webpack_require__(4387);
// EXTERNAL MODULE: ./src/queries/pages/getPage.js
var getPage = __webpack_require__(3251);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./src/utils/slugs.js
var slugs = __webpack_require__(5648);
;// CONCATENATED MODULE: ./src/queries/pages/getPages.js


//Pull out fisrt 10 pages
const GET_PAGES_URI = client_.gql`
  query getPagesUri {
   pages: pages(first: ${slugs/* PAGES_COUNT */.RO}) {
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

;// CONCATENATED MODULE: ./pages/[...slug].js









const Page = ({ data  })=>{
    const router = (0,router_.useRouter)();
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        data: data,
        children: router?.query?.slug.join("/")
    });
};
/* harmony default export */ const _slug_ = (Page);
async function getStaticProps({ params  }) {
    const { data , errors  } = await client/* default.query */.Z.query({
        query: getPage/* GET_PAGE */.w,
        variables: {
            uri: params.slug.join("/")
        }
    });
    const defaultProps = {
        props: {
            data: data || {}
        },
        /* Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */ revalidate: 1
    };
    return (0,slugs/* handleRedirectsAndReturnData */.Cd)(defaultProps, data, errors, "page");
}
async function getStaticPaths() {
    const { data  } = await client/* default.query */.Z.query({
        query: GET_PAGES_URI
    });
    const pathsData = [];
    data?.pages?.nodes?.map((page)=>{
        if (!external_lodash_default().isEmpty(page?.uri) && !(0,slugs/* default */.ZP)(page?.uri)) {
            const slugs = page?.uri?.split("/").filter((pageSlug)=>pageSlug);
            pathsData.push({
                params: {
                    slug: slugs
                }
            });
        }
        if (page?.children?.nodes?.length > 0) {
            page.children?.nodes?.map((child)=>{
                if (!external_lodash_default().isEmpty(child?.uri)) {
                    const slugs = child?.uri?.split("/").filter((childSlug)=>childSlug);
                    pathsData.push({
                        params: {
                            slug: slugs
                        }
                    });
                }
            });
        }
    });
    console.log(pathsData.map((path)=>path.params.slug));
    return {
        paths: pathsData,
        fallback: slugs/* FALLBACK */.jd
    };
} //NOTE: arr.join() => The join() method returns an array as the array values, separated by the specified separator


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 1320:
/***/ ((module) => {

module.exports = require("dompurify");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,884,400], () => (__webpack_exec__(9408)));
module.exports = __webpack_exports__;

})();