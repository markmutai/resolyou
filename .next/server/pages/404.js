"use strict";
(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_theme_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(271);
/* harmony import */ var _components_theme_containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(609);
/* harmony import */ var _components_theme_styling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _components_darkmode_themeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(155);
/* harmony import */ var _components_theme_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ErrorPage = ()=>{
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const { theme  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_components_darkmode_themeContext__WEBPACK_IMPORTED_MODULE_8__/* .ThemeContext */ .N);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 1300);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `
                    ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_7__/* .Styling.flexCenter */ .q.flexCenter}
                    relative z-20`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `
                            ${_components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.glsFx */ .L.glsFx},
                            ${_components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.mainCarouselContainer */ .L.mainCarouselContainer},
                            ${_components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.mainContainer */ .L.mainContainer}
                        `,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `
                                ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_7__/* .Styling.flexCenter */ .q.flexCenter}
                                ${_components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.carouselSubContainer */ .L.carouselSubContainer}`,
                    transition: {
                        duration: 1.2,
                        ease: "easeInOut"
                    },
                    exit: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    initial: {
                        opacity: 0,
                        y: 0
                    },
                    children: theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_4__.BarLoader, {
                        color: "hsl(207, 100%, 65%)",
                        loading: loading,
                        // css={override}
                        size: 50,
                        speedMultiplier: "0.9"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_4__.BarLoader, {
                        color: "hsl(211, 100%, 18%)",
                        loading: loading,
                        // css={override}
                        size: 50,
                        speedMultiplier: "0.9"
                    })
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            transition: {
                duration: 0.75,
                ease: "easeInOut"
            },
            exit: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                y: 0
            },
            initial: {
                opacity: 0,
                y: 0
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `
                        ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_7__/* .Styling.flexCenter */ .q.flexCenter}
                        relative z-0`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${[
                        _components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.glsFx */ .L.glsFx,
                        _components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.mainCarouselContainer */ .L.mainCarouselContainer,
                        _components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.mainContainer */ .L.mainContainer
                    ]}
                            `,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _components_theme_containers__WEBPACK_IMPORTED_MODULE_6__/* .Containers.errorContainer */ .L.errorContainer,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: `${_components_theme_fonts__WEBPACK_IMPORTED_MODULE_5__/* .Fonts.errorFont */ .F.errorFont} opacity-90`,
                                children: [
                                    "OOPS!",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                        className: `
                                        text-secondary dark:text-gray-50 
                                        xsm:text-md 
                                        md:text-2xl 
                                        xl:text-2xl
                                        `,
                                        children: [
                                            "The page you're looking for",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "isn't done yet."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>navigate(-1)
                                ,
                                className: `
                                        ${_components_theme_buttons__WEBPACK_IMPORTED_MODULE_9__/* .Buttons.btnAction */ .E.btnAction}
                                        ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_7__/* .Styling.transitionStyleFaster */ .q.transitionStyleFaster} 
                                        px-12 py-4 mt-8
                                        `,
                                children: "Take Me Back"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 176:
/***/ ((module) => {

module.exports = require("react-spinners");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [687,925], () => (__webpack_exec__(319)));
module.exports = __webpack_exports__;

})();