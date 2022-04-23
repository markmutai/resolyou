"use strict";
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* unused harmony export ThemeProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const getInitialTheme = ()=>{
    if (false) {}
    return "light";
};
const ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const ThemeProvider = ({ initialTheme , children  })=>{
    const [theme, setTheme] = React.useState(getInitialTheme);
    const checkTheme = (existing)=>{
        const root = window.document.documentElement;
        const isDark = existing === "dark";
        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(existing);
        localStorage.setItem("current-theme", existing);
    };
    if (initialTheme) {
        checkTheme(initialTheme);
    }
    React.useEffect(()=>{
        checkTheme(theme);
    }, [
        theme
    ]);
    return /*#__PURE__*/ _jsx(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    });
};


/***/ }),

/***/ 609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Containers)
/* harmony export */ });
const containerColors = "bg-white bg-opacity-80 dark:bg-darkPrimary";
const containerDimensions = `
    sm:w-[90%] 
    lg:w-[77.5%] 
    2xl:w-2/3
    2xlPlus:w-[60%] 
    3xl:w-[55%] 
    4xl:w-[50%] 
    5xl:w-[45%]
`;
const carouselDimensions = `
    w-full 
    xsm:h-[30rem] 
    md:h-[41rem] 
    lg:h-105 
    2xl:h-115
`;
const Containers = {
    glsFx: `
        gls flex h-auto rounded-lg  
        shadow-2xl dark:shadow-none 
        bg-gray-100 dark:bg-primary bg-opacity-30 dark:bg-opacity-10
        `,
    mainContainer: `   
        ${containerDimensions}    
        xsm:w-full xsm:p-0 xsm:py-0 
        xl:px-0 
        2xl:p-0 
        `,
    mainCarouselContainer: `   
        ${containerDimensions}
        relative flex items-center justify-center z-20 mb-12
        xsm:mt-0 
        md:mt-6 
        xl:mt-0 ${containerDimensions}
        `,
    introContainer: `   
        ${containerColors} ${carouselDimensions} 
        flex flex-col items-center rounded-lg my-auto 
        `,
    carouselSubContainer: `
        ${containerColors} ${carouselDimensions} 
        flex items-center rounded-lg my-auto
        xsm:flex-col 
        xl:flex-row
        `,
    profileContainer: `
        ${containerColors} 
        flex flex-row items-center rounded-lg my-auto w-full 
        xsm:px-8 xsm:h-auto xsm:py-12 
        md:px-20 
        lg:h-auto 
        `,
    imageContainer: `   
        flex justify-center items-center 
        border-secondary border-opacity-20 dark:border-opacity-10 
        xsm:hidden 
        md:block md:w-full md:py-8 
        lg:border-r lg:w-1/2 
        xl:p-6  
    `,
    errorContainer: `
        ${containerColors} 
        flex flex-col items-center justify-center rounded-lg w-full h-115 my-auto 
             
        `,
    formContainer: ` 
        ${containerColors} 
        flex items-center rounded-lg h-auto w-full my-auto
        xsm:flex-col xsm:py-0
        md:py-4
        lg:flex-row lg:px-0
        `,
    formSubContainer: `
        flex flex-col justify-center items-center 
        lg:border-r border-secondary border-opacity-20 dark:border-opacity-10 
        xsm:w-full xsm:pt-1 
        md:pt-4 
        lg:w-1/2 lg:p-4
        `,
    buttonContainer: `
        relative z-40 cursor-pointer 
        w-32 h-32 
        mx-4 mb-1 
        py-3  
        `
};


/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Fonts)
/* harmony export */ });
const Fonts = {
    menuFont: `
        mnuFont text-primary dark:text-gray-50 hover:text-secondary 
        xsm:text-2sm+ 
        xl:text-4sm+ 
        2xl:text-lg
        `,
    linkFont: `text-primary dark:text-secondary hover:text-secondary no-underline`,
    titleFont: `
        title text-primary dark:text-secondary uppercase text-center 
        xsm:text-base xsm:leading-4 xsm:tracking-tight
        md:text-lg md:leading-5 md:tracking-normal
        xl:text-md 
        2xl:text-xl   
        `,
    errorFont: `
        title text-primary dark:text-secondary uppercase text-center 
        xsm:text-5xl xsm:leading-4
        md:text-6xl md:leading-4
        xl:text-6xl 
        2xl:text-6xl   
        `,
    sectionTitleFont: `
        sectionTitle flex text-primary dark:text-secondary uppercase tracking-smidge w-full
        border-b border-secondary border-opacity-40
        xsm:justify-center xsm:text-sm xsm:py-4 xsm:mb-4
        md:text-2sm+ md:pt-0 md:pb-3 md:mb-5
        lg:justify-start
        xl:mb-4
        2xl:text-base 2xl:pb-5 2xl:mb-5  
        `,
    bodyFont: `
        bodyText text-gray-800 dark:text-gray-200 text-justify 
        xsm:text-2xs xsm:leading-[1rem]
        md:text-4xs md:leading-4
        lg:leading-5
        xl:text-4xs xl:leading-4.5
        2xl:text-sm+ 2xl:leading-5
        `,
    inputFont: `
        bodyText text-gray-900 dark:text-gray-50 
        xsm:text-sm 
        lg:text-sm+ 
        2xl:text-4sm+
        `,
    footerFont: `
        uppercase
        xsm:text-3micro 
        lg:text-xs 
        2xl:text-2xs
        `
};


/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Styling)
/* harmony export */ });
const Styling = {
    flexY: "flex items-center",
    flexX: "flex justify-center",
    flexCenter: "flex items-center justify-center",
    transitionStyle: "transition-all duration-[1200ms] ease-in-out",
    transitionStyleFast: "transition-all duration-[600ms] ease-in-out",
    transitionStyleFaster: "transition-all duration-[300ms] ease-in-out",
    modeLabelStyle: `
            mnuFont absolute cursor-pointer opacity-80 uppercase tracking-smidgePlus text-center w-full mx-auto xsm:mt-10 xsm:text-3micro md:text-xs 2xl:mt-12 2xl:text-xs
        `,
    inputStyle: `
            bg-gray-50 w-full dark:bg-black dark:bg-opacity-30 border border-gray-500 dark:border-secondary border-opacity-20 dark:border-opacity-10 rounded-[4px] xsm:py-3 2xl:py-3 xsm:px-3 2xl:px-4 xsm:mb-4 2xl:mb-4
        `,
    imgStyle: `
            h-auto mx-auto xsm:w-full 2xl:w-96
        `
};


/***/ })

};
;