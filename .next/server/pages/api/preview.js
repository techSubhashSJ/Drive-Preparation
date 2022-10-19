"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 1443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_namespaceObject);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
;// CONCATENATED MODULE: ./src/utils/cookies.js

function parseCookies(req) {
    return external_cookie_default().parse(req ? req?.headers?.cookie ?? "" : "");
}
function getAuthToken(req) {
    const cookies = parseCookies(req);
    return cookies.auth || "";
}

;// CONCATENATED MODULE: ./src/utils/redirects.js

const getPreviewRedirectUrl = (postType = "", previewPostId = "")=>{
    if (external_lodash_default().isEmpty(postType) || external_lodash_default().isEmpty(previewPostId)) {
        return "";
    }
    switch(postType){
        case "post":
            return `/blog/preview/${previewPostId}/`;
        case "page":
            return `/page/preview/${previewPostId}/`;
        default:
            return "/";
    }
};
const getLoginPreviewRedirectUrl = (postType = "", previewPostId = "")=>{
    return `/login/?postType=${postType || ""}&previewPostId=${previewPostId || ""}`;
};

;// CONCATENATED MODULE: ./pages/api/preview.js



/**
 * http://localhost:3000/api/preview/?postType=page&postId=30
 * @param req
 * @param res
 * @returns {Promise<void>}
 */ async function preview(req, res) {
    const { postType , postId  } = req.query;
    const authToken = getAuthToken(req);
    if (external_lodash_default().isEmpty(authToken)) {
        res.writeHead(307, {
            Location: `/login/?postType=${postType}&previewPostId=${postId ?? ""}`
        });
    } else {
        const previewUrl = getPreviewRedirectUrl(postType, postId);
        res.writeHead(307, {
            Location: previewUrl
        });
    }
    res.end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1443));
module.exports = __webpack_exports__;

})();