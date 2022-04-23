"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

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


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_theme_styling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);





const initialState = {
    name: "",
    email: "",
    message: ""
};
function reducer(state, action) {
    switch(action.type){
        case "name":
            return {
                ...state,
                name: action.value
            };
        case "email":
            return {
                ...state,
                email: action.value
            };
        case "message":
            return {
                ...state,
                message: action.value
            };
        default:
            throw new Error();
    }
}
function MessageForm() {
    const { 0: formState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const { 0: showFormErr , 1: setShowFormErr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: formSubmitted , 1: setFormSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        paragraph: ""
    });
    const { 0: showCaptcha , 1: setShowCaptcha  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { name , email , message  } = formState;
    const submitFormAndShowCaptcha = (e)=>{
        e.preventDefault();
        setShowCaptcha(true);
    };
    const sendEmail = (captchaValue)=>{
        if (name === "" || email === "" || message === "") {
            setShowFormErr(true);
            return;
        }
        const params = {
            ...formState,
            "g-recaptcha-response": captchaValue
        };
        setFormSubmitted({
            title: "Sending message...",
            paragraph: ""
        });
        emailjs_com__WEBPACK_IMPORTED_MODULE_2___default().send(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, params, process.env.EMAIL_JS_USER).then(({ status  })=>{
            if (status === 200) {
                setFormSubmitted({
                    title: "Message has been sent",
                    paragraph: "Mike will be in contact with you soon."
                });
            } else {
                setFormSubmitted({
                    title: "Unexpected status code returned from EmailJS, try again later",
                    paragraph: "Please contact Mike either by phone or email."
                });
            }
        }, (err)=>{
            // eslint-disable-next-line no-console
            console.log(err);
            setFormSubmitted({
                title: "Error sending message, try again later",
                paragraph: "Please contact Mike either by phone or email."
            });
        });
    };
    return formSubmitted.title === "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-2xl font-light text-white",
                children: "Send me a message"
            }),
            !showCaptcha ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: submitFormAndShowCaptcha,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${_components_theme_styling__WEBPACK_IMPORTED_MODULE_4__/* .Styling.flexCenter */ .q.flexCenter} flex-col`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:mr-4 w-100 sm:w-1/2 md:w-2/5 flex flex-col items-end",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "block text-gray-500 font-bold my-2 w-full",
                                        htmlFor: "contact-form-name",
                                        children: [
                                            "Name:",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                id: "contact-form-name",
                                                className: "appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green",
                                                type: "text",
                                                value: name,
                                                onChange: (e)=>dispatch({
                                                        type: "name",
                                                        value: e.target.value
                                                    })
                                                ,
                                                // placeholder="Name"
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "block text-gray-500 font-bold my-2 w-full",
                                        htmlFor: "contact-form-email",
                                        children: [
                                            "Email:",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                id: "contact-form-email",
                                                className: "appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green",
                                                type: "email",
                                                value: email,
                                                onChange: (e)=>dispatch({
                                                        type: "email",
                                                        value: e.target.value
                                                    })
                                                ,
                                                required: true
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "sm:mx-4 w-full sm:w-1/2 md:w-3/5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "block text-gray-500 font-bold my-2",
                                    htmlFor: "contact-form-message",
                                    children: [
                                        "Message:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            rows: "5",
                                            id: "contact-form-message",
                                            className: "appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green",
                                            type: "text",
                                            value: message,
                                            onChange: (e)=>dispatch({
                                                    type: "message",
                                                    value: e.target.value
                                                })
                                            ,
                                            required: true
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex justify-end items-center flex-col",
                        children: [
                            showFormErr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "sm:mr-4 text-red-400",
                                children: "Please fill in all three input boxes to send a message"
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-theme-green bg-sky-500 text-white w-full py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline md:w-1/4 lg:w-1/5",
                                type: "submit",
                                children: "Send"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default()), {
                sitekey: "6LeMuI0fAAAAAK_sXRjAE4MC6spGy3k4Ro9c_m3N",
                onChange: sendEmail
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center z-[999] w-screen h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-lato text-2xl font-light text-white",
                children: formSubmitted.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: formSubmitted.paragraph
            })
        ]
    });
};


/***/ })

};
;