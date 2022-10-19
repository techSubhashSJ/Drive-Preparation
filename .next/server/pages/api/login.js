"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 7202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7151);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_api__WEBPACK_IMPORTED_MODULE_0__]);
_src_utils_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function login(req, res) {
    const { username , password  } = req?.body ?? {};
    const data = await (0,_src_utils_api__WEBPACK_IMPORTED_MODULE_0__/* .loginUser */ .p)({
        username,
        password
    });
    if (data?.login === null) {
        res.status(200).json({
            success: false
        });
    } else {
        /**
     * Note when you run 'npm run start' locally, cookies won't be set, because locally process.env.NODE_ENV = 'production'
     * so secure will be true, but it will still be http and not https , when tested locally.
     * So when testing locally both in dev and prod, set the value of 'secure' to be false.
     */ res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize("auth", String(data?.login?.authToken ?? ""), {
            httpOnly: true,
            secure: "development" !== "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        }));
        // Only sending a message that successful, because we dont want to send JWT to client.
        res.status(200).json({
            success: Boolean(data?.login?.authToken)
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9659:
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

/***/ 1655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const LOGIN = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation LOGIN($input: LoginInput!) {
    login(input: $input) {
      authToken
      user {
        id
        username
        name
        email
        firstName
        lastName
      }
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LOGIN);


/***/ }),

/***/ 7151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9659);
/* harmony import */ var _mutations_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function loginUser({ username , password  }) {
    const { data , errors  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].query */ .Z.query({
        query: _mutations_login__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        variables: {
            input: {
                clientMutationId: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                username: username || "",
                password: password || ""
            }
        }
    });
    return data || {};
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7202));
module.exports = __webpack_exports__;

})();