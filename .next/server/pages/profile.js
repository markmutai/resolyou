"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 213:
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_theme_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(271);
/* harmony import */ var _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(609);
/* harmony import */ var _components_theme_styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _assets_img__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(206);
/* harmony import */ var _components_darkmode_themeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Profile = ()=>{
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
                    ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexCenter */ .q.flexCenter}
                    relative z-20
                    `,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${[
                    _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.glsFx */ .L.glsFx,
                    _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.carouselContainer */ .L.carouselContainer,
                    _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.mainContainer */ .L.mainContainer
                ]}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `${_components_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexCenter */ .q.flexCenter} ${_components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.carouselSubContainer */ .L.carouselSubContainer}`,
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
                    children: theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_3__.BarLoader, {
                        color: "hsl(207, 100%, 65%)",
                        loading: loading,
                        // css={override}
                        size: 50,
                        speedMultiplier: "0.9"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_3__.BarLoader, {
                        color: "hsl(211, 100%, 18%)",
                        loading: loading,
                        // css={override}
                        size: 50,
                        speedMultiplier: "0.9"
                    })
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
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
                            ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexCenter */ .q.flexCenter}
                            relative z-0`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `
                                    ${[
                        _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.glsFx */ .L.glsFx,
                        _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.mainCarouselContainer */ .L.mainCarouselContainer,
                        _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.mainContainer */ .L.mainContainer
                    ]}
                                `,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _components_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.profileContainer */ .L.profileContainer,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `
                                        ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexCenter */ .q.flexCenter}
                                        border-secondary border-opacity-20 dark:border-opacity-10 
                                        xsm:hidden xsm:w-full xsm:pt-0 xsm:pb-0 xsm:px-0
                                        md:px-24 md:pb-12
                                        lg:block lg:border-r lg:w-1/2 lg:p-0 lg:py-14 lg:px-32
                                        xl:px-10 
                                        `,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: "Nyokabi Kamotho",
                                    src: _assets_img__WEBPACK_IMPORTED_MODULE_7__/* .Images.nkImg */ .r.nkImg,
                                    className: "w-80 h-auto mx-auto p-4"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `
                                    ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexY */ .q.flexY}
                                    h-auto flex-col 
                                    xsm:w-full xsm:py-0 xsm:px-0
                                    md:px-10 md:py-4 
                                    lg:py-14 
                                    xl:pr-0 xl:pl-16 `,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `
                                            ${_components_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexCenter */ .q.flexCenter}
                                            border-secondary border-opacity-20 dark:border-opacity-10 
                                            xsm:block xsm:w-full xsm:pt-0 xsm:px-14 xsm:pb-5
                                            md:pb-12 md:px-24 
                                            lg:hidden lg:border-r lg:w-1/2 lg:p-0 lg:py-12 lg:px-32
                                            xl:px-16
                                            `,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: _assets_img__WEBPACK_IMPORTED_MODULE_7__/* .Images.nkImg */ .r.nkImg,
                                            alt: "Conflict Resolution",
                                            className: "xsm:w-full md:w-80 h-auto mx-auto border-4 rounded-lg overflow-hidden border-secondary border-opacity-20 dark:border-primary"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: `${_components_theme_fonts__WEBPACK_IMPORTED_MODULE_4__/* .Fonts.sectionTitleFont */ .F.sectionTitleFont}`,
                                        children: "Nyokabi Kamotho"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: `${_components_theme_fonts__WEBPACK_IMPORTED_MODULE_4__/* .Fonts.bodyFont */ .F.bodyFont}`,
                                        children: [
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit velit, nunc malesuada volutpat id amet nisi, aliquet. Varius rutrum aliquam vitae quam vitae, quisque. Lectus id suspendisse nam ac facilisi sed fringilla. Eu arcu massa, ac pellentesque sapien aliquet. Semper velit, lacus, urna, turpis vel turpis morbi nisl, dapibus. Vitae pharetra et, quis proin.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "Etiam faucibus sodales nec nisl eget massa. Urna pellentesque porttitor id at quis pharetra arcu, sociis malesuada. Scelerisque orci adipiscing pellentesque varius ipsum platea odio. At pharetra nunc consequat, dui. Facilisis sagittis nulla suspendisse quam nisi sagittis massa. Habitasse suspendisse facilisis viverra nec pretium. Nam laoreet lorem posuere enim viverra. Eros curabitur nunc imperdiet imperdiet id nisi sit diam."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [687,206], () => (__webpack_exec__(213)));
module.exports = __webpack_exports__;

})();