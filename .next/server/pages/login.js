"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 4984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_validator_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2112);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _src_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8301);
/* harmony import */ var _src_apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4869);
/* harmony import */ var _src_utils_slugs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5648);
/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4387);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_utils_redirects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4873);
/* harmony import */ var _src_queries_pages_getPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3251);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Login = ({ data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: loginFields , 1: setLoginFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        username: "",
        password: ""
    });
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onFormSubmit = (event)=>{
        event.preventDefault();
        setErrorMessage(null);
        const { postType , previewPostId  } = router?.query ?? {};
        // Validation and Sanitization.
        const validationResult = (0,_src_utils_validator_login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            username: loginFields?.username ?? "",
            password: loginFields?.password ?? ""
        });
        if (validationResult.isValid) {
            setLoading(true);
            return (0,axios__WEBPACK_IMPORTED_MODULE_4__["default"])({
                data: {
                    username: validationResult?.sanitizedData?.username ?? "",
                    password: validationResult?.sanitizedData?.password ?? ""
                },
                method: "post",
                url: "/api/login"
            }).then((data)=>{
                setLoading(false);
                console.log("DATA", data);
                const { success  } = data?.data ?? {};
                console.log(success);
                // If its a preview request
                if (success && postType && previewPostId) {
                    const previewUrl = (0,_src_utils_redirects__WEBPACK_IMPORTED_MODULE_10__/* .getPreviewRedirectUrl */ .Q)(postType, previewPostId);
                    router.push(previewUrl);
                } else {
                    setErrorMessage("Invalid Credentials");
                }
                return data?.data?.success;
            }).catch(()=>{
                setLoading(false);
                return false;
            });
        } else {
            setClientSideError(validationResult);
        }
    };
    /**
   * Sets client side error.
   *
   * Sets error data to result received from our client side validation function,
   * and statusbar to true so that its visible to show the error.
   *
   * @param {Object} validationResult Validation Data result.
   */ const setClientSideError = (validationResult)=>{
        if (validationResult.errors.password) {
            setErrorMessage(validationResult.errors.password);
        }
        if (validationResult.errors.username) {
            setErrorMessage(validationResult.errors.username);
        }
    };
    const handleOnChange = (event)=>{
        setLoginFields({
            ...loginFields,
            [event.target.name]: event.target.value
        });
    };
    const { username , password  } = loginFields;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        data: data,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "login-form bg-gray-100 rounded-lg p-8 md:ml-auto mt-10 md:mt-12 w-5/12 m-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "text-gray-900 text-lg font-medium title-font mb-5 block",
                    children: "Login"
                }),
                !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(errorMessage) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-red-600",
                    dangerouslySetInnerHTML: {
                        __html: (0,_src_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_5__/* .Sanitize */ .o)(errorMessage)
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: onFormSubmit,
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "leading-7 text-sm text-gray-600",
                            children: [
                                "Username:",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                    name: "username",
                                    value: username,
                                    onChange: handleOnChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "leading-7 text-sm text-gray-600",
                            children: [
                                "Password:",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password",
                                    className: "mb-8 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                                    name: "password",
                                    value: password,
                                    onChange: handleOnChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                            type: "submit",
                            children: "Login"
                        }),
                        loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Loading..."
                        }) : null
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
async function getStaticProps(context) {
    const { data , errors  } = await _src_apollo_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].query */ .Z.query({
        query: _src_queries_pages_getPage__WEBPACK_IMPORTED_MODULE_11__/* .GET_PAGE */ .w,
        variables: {
            uri: "/"
        }
    });
    const defaultProps = {
        props: {
            data: data || {}
        },
        /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */ revalidate: 1
    };
    return (0,_src_utils_slugs__WEBPACK_IMPORTED_MODULE_7__/* .handleRedirectsAndReturnData */ .Cd)(defaultProps, data, errors, "page");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getPreviewRedirectUrl)
/* harmony export */ });
/* unused harmony export getLoginPreviewRedirectUrl */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getPreviewRedirectUrl = (postType = "", previewPostId = "")=>{
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(postType) || lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(previewPostId)) {
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


/***/ }),

/***/ 2112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ login)
});

;// CONCATENATED MODULE: external "validator"
const external_validator_namespaceObject = require("validator");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_namespaceObject);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./src/utils/validator/login.js


const validateAndSanitizeLoginForm = (data)=>{
    let errors = {};
    let sanitizedData = {};
    /**
     * Set the username value equal to an empty string if user has not entered the username, otherwise the Validator.isEmpty() wont work down below.
     * Note that the isEmpty() here is our custom function defined in is-empty.js and
     * Validator.isEmpty() down below comes from validator library.
     * Similarly we do it for the rest of the fields
     */ data.username = !(0,external_lodash_.isEmpty)(data.username) ? data.username : "";
    data.password = !(0,external_lodash_.isEmpty)(data.password) ? data.password : "";
    /**
     * Checks for error if required is true
     * and adds Error and Sanitized data to the errors and sanitizedData object respectively.
     *
     * @param {String} fieldName Field name e.g. First name, last name
     * @param {String} errorContent Error Content to be used in showing error e.g. First Name, Last Name
     * @param {Integer} min Minimum characters required
     * @param {Integer} max Maximum characters required
     * @param {String} type Type e.g. email, phone etc.
     * @param {boolean} required Required if required is passed as false, it will not validate error and just do sanitization.
     */ const addErrorAndSanitizedData = (fieldName, errorContent, min, max, type = "", required)=>{
        /**
         * Please note that this isEmpty() belongs to validator and not our custom function defined above.
         *
         * Check for error and if there is no error then sanitize data.
         */ if (!external_validator_default().isLength(data[fieldName], {
            min,
            max
        })) {
            errors[fieldName] = `${errorContent} must be ${min} to ${max} characters`;
        }
        if (required && external_validator_default().isEmpty(data[fieldName])) {
            errors[fieldName] = `${errorContent} is required`;
        }
        // If no errors
        if (!errors[fieldName]) {
            sanitizedData[fieldName] = external_validator_default().trim(data[fieldName]);
            sanitizedData[fieldName] = external_validator_default().escape(sanitizedData[fieldName]);
        }
    };
    addErrorAndSanitizedData("username", "Username", 2, 35, "string", true);
    addErrorAndSanitizedData("password", "Password", 2, 35, "string", true);
    return {
        sanitizedData,
        errors,
        isValid: (0,external_lodash_.isEmpty)(errors)
    };
};
/* harmony default export */ const login = (validateAndSanitizeLoginForm);


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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,884,400], () => (__webpack_exec__(4984)));
module.exports = __webpack_exports__;

})();