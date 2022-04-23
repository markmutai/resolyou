"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(271);
/* harmony import */ var _theme_containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(609);
/* harmony import */ var _theme_styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _assets_img__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(206);
/* harmony import */ var _darkmode_themeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import { Spacing } from '../theme/spacing';
const Intro = ()=>{
    const { theme  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_darkmode_themeContext__WEBPACK_IMPORTED_MODULE_8__/* .ThemeContext */ .N);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 1200);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.introContainer */ .L.introContainer} justify-center`,
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
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative z-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${_theme_containers__WEBPACK_IMPORTED_MODULE_5__/* .Containers.carouselSubContainer */ .L.carouselSubContainer} ${_theme_styling__WEBPACK_IMPORTED_MODULE_6__/* .Styling.flexX */ .q.flexX}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
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
                        children: [
                            theme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: _assets_img__WEBPACK_IMPORTED_MODULE_7__/* .Images.logoDrk */ .r.logoDrk,
                                alt: "ResolYou Conflict Resolution",
                                className: ` xsm:w-48 md:w-60 mx-auto mb-6 opacity-80`
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: _assets_img__WEBPACK_IMPORTED_MODULE_7__/* .Images.logo */ .r.logo,
                                alt: "ResolYou Conflict Resolution",
                                className: ` xsm:w-48 md:w-60 mx-auto mb-6`
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_4__/* .Fonts.titleFont */ .F.titleFont} opacity-90`,
                                children: [
                                    "Conflict Resolution",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Resolyou",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "text-secondary dark:text-gray-50",
                                        children: ".org"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }, 1)
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 998:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Navbar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(661);
;// CONCATENATED MODULE: external "hamburger-react"
const external_hamburger_react_namespaceObject = require("hamburger-react");
;// CONCATENATED MODULE: external "@popperjs/core"
const core_namespaceObject = require("@popperjs/core");
// EXTERNAL MODULE: ./src/components/darkmode/themeContext.js
var themeContext = __webpack_require__(155);
// EXTERNAL MODULE: ./src/components/theme/fonts.js
var fonts = __webpack_require__(271);
// EXTERNAL MODULE: ./src/components/theme/containers.js
var containers = __webpack_require__(609);
;// CONCATENATED MODULE: ./src/components/theme/spacing.js
const spacing_Spacing = {
    menuSpace: "lg:px-4 2xl:px-8 py-2",
    menuItemBorder: "h-full w-2 border-r border-primary dark:border-secondary border-opacity-30 dark:border-opacity-20",
    menuItemsSpace: "md:space-x-14 lg:space-x-16 2xl:space-x-20 2xlPlus:space-x-16 py-4",
    infoPadding: `   xsm:px-14 xsm:pb-12 md:px-24 lg:px-32 lg:py-14 xl:px-16
        `,
    profilePadding: `   
            xsm:px-10 xsm:py-4 lg:py-14 xl:pr-0 xl:pl-16 
        `
};

;// CONCATENATED MODULE: ./src/components/theme/colors.js
const colors_Colors = {
    borderNavColor: "border-primary dark:border-secondary border-opacity-10 dark:border-opacity-15"
};

// EXTERNAL MODULE: ./src/assets/img/index.js
var img = __webpack_require__(206);
// EXTERNAL MODULE: ./src/components/theme/styling.js
var styling = __webpack_require__(9);
;// CONCATENATED MODULE: ./src/components/darkmode/toggle.js




// "text-gray-500 dark:text-gray-400 bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
const toggle_Toggle = ()=>{
    const { theme , setTheme  } = React.useContext(ThemeContext);
    const modeBtn = `
            bg-gradient-to-br 
            xsm:w-4 xl:w-5 
            xsm:h-4 xl:h-5 
        `;
    const btnWindow = `
            w-full 
            xsm:px-1.5
            md:p-0.5
        `;
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "relative flex flex-row justify-center z-40 -mt-4 md:mb-8 lg:mb-10 2xl:mb-12 opacity-90",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                    ,
                    className: `${Styling.transitionStyleFast} darkModeToggle cursor-pointer transition-all duration-500 flex flex-row bg-lightSky bg-no-repeat bg-cover dark:bg-darkSky justify-center xsm:px-2 md:px-4 2xl:px-7 xsm:py-0.5 md:py-0 2xl:py-0.5 rounded-full dark:from-slate-900 dark:to-blue-800 shadow-sm xsm:border-2 xl:border-3 border-white hover:border-lightSecondary dark:border-darkSecondary dark:hover:border-white border-opacity-90 dark:border-opacity-80`,
                    children: theme === "dark" ? // Dark Mode
                    /*#__PURE__*/ _jsx("button", {
                        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                        ,
                        className: theme === "dark" ? `${Styling.transitionStyleFast} ${btnWindow} xsm:translate-x-3 md:translate-x-4 2xl:translate-x-6 text-lg rounded-full ring-transparent cursor-pointer` : "",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: `${modeBtn} from-gray-50 to-gray-400 rounded-full shadow-md`
                        })
                    }) : // Light Mode
                    /*#__PURE__*/ _jsx("button", {
                        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                        ,
                        className: theme === "dark" ? "" : `${Styling.transitionStyleFast} ${btnWindow} xsm:-translate-x-3 md:-translate-x-4 2xl:-translate-x-6 text-lg rounded-full cursor-pointer`,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: `${modeBtn} from-yellow-200 to-amber-500 rounded-full shadow-md`
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "absolute z-40 xsm:hidden md:block w-full bg-gray-300",
                    children: theme === "dark" ? /*#__PURE__*/ _jsx("p", {
                        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                        ,
                        className: `${Styling.transitionStyle} ${Styling.modeLabelStyle} text-primary dark:text-secondary`,
                        children: "Dark Mode"
                    }) : /*#__PURE__*/ _jsx("p", {
                        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                        ,
                        className: `${Styling.transitionStyle} ${Styling.modeLabelStyle} text-primary dark:text-secondary`,
                        children: "Light Mode"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/navbar/index.js





// import { HashLink } from 'react-router-hash-link';








const Navbar = ()=>{
    const ptnStyle = "transition-all duration-[100ms] ease-in-out fixed w-full h-full z-0";
    const logoSizes = [
        20,
        17.5,
        37.5,
        14
    ];
    const logoWidth = `xsm:w-[${logoSizes[0]}%] lg:w-[${logoSizes[1]}%] xl:w-[${logoSizes[2]}%] 2xl:w-[${logoSizes[3]}%]`;
    const menuMath = [
        (100 - logoSizes[0]) / 2,
        (100 - logoSizes[1]) / 2,
        (100 - logoSizes[2]) / 2,
        (100 - logoSizes[3]) / 2
    ];
    console.log(menuMath);
    const menuHalves = `h-full inline-flex items-center justify-center border-y xsm:w-[${menuMath[0]}%] lg:w-[${menuMath[1]}%] xl:w-[${menuMath[2]}%] 2xl:w-[${menuMath[3]}%]`;
    const mobileSubStyle = `border-b border-secondary border-opacity-20 py-4`;
    const { theme , setTheme  } = React.useContext(ThemeContext);
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = /*#__PURE__*/ React.createRef();
    const popoverDropdownRef = /*#__PURE__*/ React.createRef();
    const openDropdownPopover = ()=>{
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "center"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = ()=>{
        setDropdownPopoverShow(false);
    };
    const { 0: isOpen , 1: setOpen  } = useState(false);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            theme === "dark" ? /*#__PURE__*/ _jsx("div", {
                className: `${ptnStyle} ptn_drk`
            }) : /*#__PURE__*/ _jsx("div", {
                className: `${ptnStyle} ptn`
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: `
            relative inline-flex justify-center w-full z-10
            xsm:pt-8 
            md:py-12 
            lg:py-10 
            2xl:py-16
            `,
                children: [
                    /*#__PURE__*/ _jsx("nav", {
                        className: `
                ${Styling.flexY}
                ${Containers.mainContainer}
                xsm:hidden xsm:h-12
                md:block md:h-15 
                lg:h-16 
                2xl:h-18
                `,
                        children: /*#__PURE__*/ _jsxs("ul", {
                            className: `
                    ${Styling.transitionStyleFast} 
                    ${Colors.menuItemColor}
                    cursor-default inline-flex items-center justify-center list-none w-full h-full text-white  xsm:text-sm 
                    lg:text-base 
                    2xl:text-md`,
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: `${menuHalves} ${Colors.borderNavColor} ${Spacing.menuItemsSpace}`,
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            className: `
                            ${Fonts.menuFont} 
                            ${Spacing.menuSpace}
                            `,
                                            children: /*#__PURE__*/ _jsx(NavLink, {
                                                to: "/",
                                                className: ({ isActive  })=>isActive ? `text-secondary` : `${Styling.transitionStyleFaster} hover:text-secondary`
                                                ,
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            className: `${Spacing.menuItemBorder}`
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            className: `
                            ${Fonts.menuFont} 
                            ${Spacing.menuSpace}
                            `,
                                            children: /*#__PURE__*/ _jsx(NavLink, {
                                                to: "/profile",
                                                className: ({ isActive  })=>isActive ? "text-secondary" : `${Styling.transitionStyleFaster} hover:text-secondary`
                                                ,
                                                children: "Profiles"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: `
                        ${Containers.transitionStyleFast} 
                        ${logoWidth} 
                        ${Styling.flexCenter}
                        `,
                                    children: /*#__PURE__*/ _jsx(NavLink, {
                                        to: "/",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            alt: "ResolYou",
                                            src: Images.logoMin,
                                            className: `
                                    opacity-100 dark:opacity-80
                                    xsm:w-[4rem] 
                                    lg:w-[4rem] 
                                    xl:w-[4.25rem] 
                                    2xl:w-[5rem]
                                    `
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: `${menuHalves} ${Colors.borderNavColor} ${Spacing.menuItemsSpace}`,
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            className: `
                            ${Fonts.menuFont} 
                            ${Spacing.menuSpace}
                            `,
                                            children: /*#__PURE__*/ _jsx(NavLink, {
                                                to: "/clients",
                                                className: ({ isActive  })=>isActive ? "text-secondary" : `${Styling.transitionStyleFaster} hover:text-secondary`
                                                ,
                                                children: "Clients"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            className: `${Spacing.menuItemBorder}`
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            className: `${Fonts.menuFont} ${Spacing.menuSpace}`,
                                            children: /*#__PURE__*/ _jsx(NavLink, {
                                                to: "/contact",
                                                className: ({ isActive  })=>isActive ? "text-secondary" : `${Styling.transitionStyleFaster} hover:text-secondary`
                                                ,
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("nav", {
                        className: `
                ${Containers.mainContainer} 
                ${Styling.flexY}
                mobileMenu relative z-40 p-0 mb-10
                xsm:block 
                md:hidden xsm:h-12 md:h-16 2xl:h-18 `,
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: `${Styling.transitionStyleFast} ${Colors.menuItemColor} flex flex-row h-full xsm:w-full cursor-default `,
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center w-[40%] relative z-[999] border-y border-primary dark:border-secondary border-opacity-10 dark:border-opacity-15",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            className: `
                                    flex flex-row items-center w-auto
                                    text-white font-bold uppercase text-sm 
                                    outline-none focus:outline-none ease-linear  
                                    transition-all duration-150
                                    `,
                                            type: "button",
                                            ref: btnDropdownRef,
                                            onClick: ()=>{
                                                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                                            },
                                            children: theme === "dark" ? /*#__PURE__*/ _jsx(Hamburger, {
                                                toggle: setOpen,
                                                rounded: true,
                                                size: 24,
                                                easing: "ease-in",
                                                distance: "lg",
                                                duration: 0.3,
                                                toggled: isOpen,
                                                color: "hsl(207, 100%, 65%)"
                                            }) : /*#__PURE__*/ _jsx(Hamburger, {
                                                toggle: setOpen,
                                                rounded: true,
                                                size: 24,
                                                easing: "ease-in",
                                                distance: "lg",
                                                duration: 0.3,
                                                toggled: isOpen,
                                                color: "hsl(211, 100%, 18%)"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            onClick: ()=>{
                                                closeDropdownPopover();
                                                setOpen();
                                            },
                                            className: `
                                mnuFont flex items-center pl-1 cursor-default 
                                text-primary dark:text-secondary uppercase text-sm 
                                h-full w-full text-left `,
                                            children: "Menu"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mnuFont text-white absolute top-12 left-0 z-50",
                                            children: /*#__PURE__*/ _jsxs("ul", {
                                                ref: popoverDropdownRef,
                                                className: (dropdownPopoverShow ? "block " : "hidden ") + `${Styling.transitionStyleFast} bg-primary dark:bg-black z-50 list-none text-left text-2sm+ rounded-br-lg shadow-2xl space-y-2 pt-1 pb-2 pl-4 w-40`,
                                                children: [
                                                    /*#__PURE__*/ _jsx("li", {
                                                        className: `${mobileSubStyle}`,
                                                        children: /*#__PURE__*/ _jsx(NavLink, {
                                                            to: "/",
                                                            onClick: ()=>{
                                                                closeDropdownPopover();
                                                                setOpen();
                                                            },
                                                            className: ({ isActive  })=>(isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`
                                                            ,
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        className: `${mobileSubStyle}`,
                                                        children: /*#__PURE__*/ _jsx(NavLink, {
                                                            to: "/profile",
                                                            onClick: ()=>{
                                                                closeDropdownPopover();
                                                                setOpen();
                                                            },
                                                            className: ({ isActive  })=>(isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`
                                                            ,
                                                            children: "Profiles"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        className: `${mobileSubStyle}`,
                                                        children: /*#__PURE__*/ _jsx(NavLink, {
                                                            to: "/clients",
                                                            onClick: ()=>{
                                                                closeDropdownPopover();
                                                                setOpen();
                                                            },
                                                            className: ({ isActive  })=>(isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`
                                                            ,
                                                            children: "Clients"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("li", {
                                                        className: `py-4`,
                                                        children: /*#__PURE__*/ _jsx(NavLink, {
                                                            to: "/contact",
                                                            onClick: ()=>{
                                                                closeDropdownPopover();
                                                                setOpen();
                                                            },
                                                            className: ({ isActive  })=>(isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`
                                                            ,
                                                            children: "Contact"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: `flex items-center justify-center xsm:w-[20%] px-4 h-full`,
                                    children: /*#__PURE__*/ _jsx(NavLink, {
                                        to: "/",
                                        onClick: ()=>{
                                            closeDropdownPopover();
                                            setOpen();
                                        },
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: Images.logoMin,
                                            alt: "ResolYou",
                                            className: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: `
                        flex flex-row items-center justify-end h-full pr-3
                        border-y border-primary dark:border-secondary border-opacity-10 dark:border-opacity-15  xsm:w-[40%]
                        `,
                                    children: [
                                        theme === "dark" ? /*#__PURE__*/ _jsx("p", {
                                            onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                            ,
                                            className: "mnuFont flex items-center justify-end uppercase text-primary dark:text-secondary text-sm h-full w-full text-right pr-3",
                                            children: "Dark"
                                        }) : /*#__PURE__*/ _jsx("p", {
                                            onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
                                            ,
                                            className: "mnuFont flex items-center justify-end uppercase text-primary dark:text-secondary text-sm h-full w-full text-right pr-3",
                                            children: "Light"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "flex flex-row items-center pt-3.5 h-full",
                                            children: /*#__PURE__*/ _jsx(Toggle, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "flex flex-col justify-center xsm:hidden md:block",
                children: /*#__PURE__*/ _jsx(Toggle, {})
            })
        ]
    });
};


/***/ }),

/***/ 589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SimpleSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(271);
/* harmony import */ var _theme_containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(609);
/* harmony import */ var _theme_styling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _assets_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(206);
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(927);
/* harmony import */ var _theme_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(925);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_intro__WEBPACK_IMPORTED_MODULE_7__]);
_intro__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function NextArrow(props) {
    const { className , style , onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "xsm:block md:block",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `
                xsm:-right-1 
                md:-right-8 
                lg:-right-10 
                ${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.transitionStyleFaster */ .q.transitionStyleFaster} ${_theme_buttons__WEBPACK_IMPORTED_MODULE_8__/* .Buttons.btnCarousel */ .E.btnCarousel}`,
            style: {
                ...style
            },
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: "Next",
                src: _assets_img__WEBPACK_IMPORTED_MODULE_6__/* .Images.nextIco */ .r.nextIco,
                className: `${_theme_buttons__WEBPACK_IMPORTED_MODULE_8__/* .Buttons.btnIcon */ .E.btnIcon}`
            })
        })
    });
}
function PrevArrow(props) {
    const { className , style , onClick  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "xsm:block md:block",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `
                xsm:-left-1 
                md:-left-8 
                lg:-left-10 
                ${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.transitionStyleFaster */ .q.transitionStyleFaster} ${_theme_buttons__WEBPACK_IMPORTED_MODULE_8__/* .Buttons.btnCarousel */ .E.btnCarousel}
                `,
            style: {
                ...style
            },
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: "Previous",
                src: _assets_img__WEBPACK_IMPORTED_MODULE_6__/* .Images.prevIco */ .r.prevIco,
                className: `${_theme_buttons__WEBPACK_IMPORTED_MODULE_8__/* .Buttons.btnIcon */ .E.btnIcon}`
            })
        })
    });
}
class SimpleSlider extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            // autoplay: true,
            // autoplaySpeed: 12000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {}),
            prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {}),
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        initialSlide: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        innerWidth: 400
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        initialSlide: 1
                    }
                }
            ]
        };
        const carImage = `
        flex justify-center items-center 
        border-primary dark:border-secondary border-opacity-10 dark:border-opacity-10
        xsm:hidden xsm:pt-4 xsm:px-14
        md:block md:w-full md:pb-4 md:px-24
        lg:border-r lg:w-1/2 lg:py-14 lg:px-32
        xl:p-6 xl:pb-10 xl:pl-16 xl:pr-0
        `;
        const imageDimensions = `
        h-auto mx-auto 
        xsm:w-full 
        md:w-[50%] 
        xl:w-[80%] 
        2xl:w-96
        `;
        const carDetail = `
        relative flex flex-row items-center h-full
        xsm:w-full xsm:px-12 xsm:pb-5
        md:pb-12 md:px-16
        lg:w-1/2 lg:px-32 lg:py-14
        xl:px-12 
        2xl:px-16 
        `;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `
                ${_theme_containers__WEBPACK_IMPORTED_MODULE_4__/* .Containers.glsFx */ .L.glsFx} 
                ${_theme_containers__WEBPACK_IMPORTED_MODULE_4__/* .Containers.mainContainer */ .L.mainContainer} 
                ${_theme_containers__WEBPACK_IMPORTED_MODULE_4__/* .Containers.mainCarouselContainer */ .L.mainCarouselContainer} 
                ${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.transitionStyle */ .q.transitionStyle}}
                `,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: `
                    ${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.flexY */ .q.flexY}
                    relative h-[100%]
                    xsm:w-full px-0 mx-0`,
                ref: (c)=>this.slider = c
                ,
                ...settings,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_intro__WEBPACK_IMPORTED_MODULE_7__/* .Intro */ .p, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.flexCenter */ .q.flexCenter} z-20`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${[
                                _theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.transitionStyle */ .q.transitionStyle,
                                _theme_containers__WEBPACK_IMPORTED_MODULE_4__/* .Containers.carouselSubContainer */ .L.carouselSubContainer
                            ]}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${carImage}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "Conflict Resolution",
                                        src: _assets_img__WEBPACK_IMPORTED_MODULE_6__/* .Images.conflictImg */ .r.conflictImg,
                                        className: `${imageDimensions}`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${carDetail}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.sectionTitleFont */ .F.sectionTitleFont}`,
                                                children: "Conflict Resolution"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.bodyFont */ .F.bodyFont}`,
                                                children: [
                                                    "We all come from different backgrounds, attitudes & opinions but we must come together & form relationships to meet various objectives & goals; for processes to work & for administrations to function. Conflicts are therefore inevitable. With efficient conflict resolution mechanisms in place, friction is reduced & tensions avoided in a professional and respectable manner.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Reap strong relationships. Having good conflict resolution skills help personalities reduce the friction that damages their working relationships. By resolving conflicts in a more professional and respectful manner, they are enabled to collaborate better with, building stronger work relationships.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Reduced disruptions. Poor conflict resolution skills cause tension to build up in the face of any disagreement, which then spreads to other stakeholders who may not have been involved originally. This results in a developing negative morale as well as stalling of the work flow. By providing conflict resolution mechanisms and training parties in conflict resolution, such disruptions can be minimized and a better working environment can be created."
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }, 2),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.flexCenter */ .q.flexCenter} z-20`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.transitionStyle */ .q.transitionStyle} ${_theme_containers__WEBPACK_IMPORTED_MODULE_4__/* .Containers.carouselSubContainer */ .L.carouselSubContainer}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${carImage}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "Conflict Resolution",
                                        src: _assets_img__WEBPACK_IMPORTED_MODULE_6__/* .Images.mediationImg */ .r.mediationImg,
                                        className: `${imageDimensions}`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${carDetail}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.sectionTitleFont */ .F.sectionTitleFont}`,
                                                children: "Mediation Specialist"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.bodyFont */ .F.bodyFont}`,
                                                children: "With vast experience and skill in mediation on family, commercial and community matters, any matter of disagreement referred is efficiently analyzed and broken down into manageable issues to prevent and/or sort out the rising conflict.  Judiciary experience arms the mediator with a 60-day limit to bring conflict to resolution culminating in preserved relationships and allowing continuity of functions."
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }, 3),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative z-20",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${_theme_styling__WEBPACK_IMPORTED_MODULE_5__/* .Styling.transitionStyle */ .q.transitionStyle} ${_theme_containers__WEBPACK_IMPORTED_MODULE_4__/* .Containers.carouselSubContainer */ .L.carouselSubContainer}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${carImage}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "Conflict Resolution",
                                        src: _assets_img__WEBPACK_IMPORTED_MODULE_6__/* .Images.trainingImg */ .r.trainingImg,
                                        className: `${imageDimensions}`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${carDetail}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.sectionTitleFont */ .F.sectionTitleFont}`,
                                                children: "Conflict Resolution Training"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.bodyFont */ .F.bodyFont}`,
                                                children: "This 2--day conflict resolution training programme will teach and train others how to more confidently deal with workplace conflict situations. Participants will discover how conflict situations can be turned around into opportunities, they will explore and practice a conflict resolution process to more successfully handle workplace conflict.  This training arms participants to:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: `
                                    ${_theme_fonts__WEBPACK_IMPORTED_MODULE_3__/* .Fonts.bodyFont */ .F.bodyFont}
                                    list-disc 
                                    xsm:ml-2 xsm:space-y-1 
                                    md:ml-4 md:space-y-2 
                                    `,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Learn, Practice and follow a process of resolving conflict;"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Become more confident in handling interpersonal and common workplace conflict;"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Become aware of the different styles of resolving conflict;"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: "Follow step-by-step process of successfully mediating conflict between two parties."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }, 4)
                ]
            })
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44:
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
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_slider__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_slider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            transition: {
                duration: 1.5,
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
                y: 0.15
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex items-center justify-center z-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_slider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 96:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [687,206,925], () => (__webpack_exec__(44)));
module.exports = __webpack_exports__;

})();