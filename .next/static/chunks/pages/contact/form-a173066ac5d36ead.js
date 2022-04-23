(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7352:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact/form",function(){return n(7550)}])},7009:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var a={flexY:"flex items-center",flexX:"flex justify-center",flexCenter:"flex items-center justify-center",transitionStyle:"transition-all duration-[1200ms] ease-in-out",transitionStyleFast:"transition-all duration-[600ms] ease-in-out",transitionStyleFaster:"transition-all duration-[300ms] ease-in-out",modeLabelStyle:"\n            mnuFont absolute cursor-pointer opacity-80 uppercase tracking-smidgePlus text-center w-full mx-auto xsm:mt-10 xsm:text-3micro md:text-xs 2xl:mt-12 2xl:text-xs\n        ",inputStyle:"\n            bg-gray-50 w-full dark:bg-black dark:bg-opacity-30 border border-gray-500 dark:border-secondary border-opacity-20 dark:border-opacity-10 rounded-[4px] xsm:py-3 2xl:py-3 xsm:px-3 2xl:px-4 xsm:mb-4 2xl:mb-4\n        ",imgStyle:"\n            h-auto mx-auto xsm:w-full 2xl:w-96\n        "}},7550:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(5893),r=n(7294),l=n(9101),s=n(4853),o=n(7009),i=n(3454);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){c(e,t,n[t])}))}return e}var m={name:"",email:"",message:""};function d(e,t){switch(t.type){case"name":return u({},e,{name:t.value});case"email":return u({},e,{email:t.value});case"message":return u({},e,{message:t.value});default:throw new Error}}function f(){var e=(0,r.useReducer)(d,m),t=e[0],n=e[1],c=(0,r.useState)(!1),f=c[0],x=c[1],g=(0,r.useState)({title:"",paragraph:""}),p=g[0],h=g[1],y=(0,r.useState)(!1),b=y[0],w=y[1],v=t.name,j=t.email,N=t.message;return""===p.title?(0,a.jsxs)("div",{className:"h-full w-full",children:[(0,a.jsx)("h3",{className:"text-2xl font-light text-white",children:"Send me a message"}),b?(0,a.jsx)(s.Z,{sitekey:"6LeMuI0fAAAAAK_sXRjAE4MC6spGy3k4Ro9c_m3N",onChange:function(e){if(""!==v&&""!==j&&""!==N){var n=u({},t,{"g-recaptcha-response":e});h({title:"Sending message...",paragraph:""}),l.ZP.send(i.env.EMAIL_JS_SERVICE,i.env.EMAIL_JS_TEMPLATE,n,i.env.EMAIL_JS_USER).then((function(e){var t=e.status;h(200===t?{title:"Message has been sent",paragraph:"Mike will be in contact with you soon."}:{title:"Unexpected status code returned from EmailJS, try again later",paragraph:"Please contact Mike either by phone or email."})}),(function(e){console.log(e),h({title:"Error sending message, try again later",paragraph:"Please contact Mike either by phone or email."})}))}else x(!0)}}):(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(!0)},children:[(0,a.jsxs)("div",{className:"".concat(o.q.flexCenter," flex-col"),children:[(0,a.jsxs)("div",{className:"sm:mr-4 w-100 sm:w-1/2 md:w-2/5 flex flex-col items-end",children:[(0,a.jsxs)("label",{className:"block text-gray-500 font-bold my-2 w-full",htmlFor:"contact-form-name",children:["Name:",(0,a.jsx)("input",{id:"contact-form-name",className:"appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green",type:"text",value:v,onChange:function(e){return n({type:"name",value:e.target.value})},required:!0})]}),(0,a.jsxs)("label",{className:"block text-gray-500 font-bold my-2 w-full",htmlFor:"contact-form-email",children:["Email:",(0,a.jsx)("input",{id:"contact-form-email",className:"appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green",type:"email",value:j,onChange:function(e){return n({type:"email",value:e.target.value})},required:!0})]})]}),(0,a.jsx)("div",{className:"sm:mx-4 w-full sm:w-1/2 md:w-3/5",children:(0,a.jsxs)("label",{className:"block text-gray-500 font-bold my-2",htmlFor:"contact-form-message",children:["Message:",(0,a.jsx)("textarea",{rows:"5",id:"contact-form-message",className:"appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green",type:"text",value:N,onChange:function(e){return n({type:"message",value:e.target.value})},required:!0})]})})]}),(0,a.jsxs)("div",{className:"w-full flex justify-end items-center flex-col",children:[f?(0,a.jsx)("p",{className:"sm:mr-4 text-red-400",children:"Please fill in all three input boxes to send a message"}):null,(0,a.jsx)("button",{className:"bg-theme-green bg-sky-500 text-white w-full py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline md:w-1/4 lg:w-1/5",type:"submit",children:"Send"})]})]})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center z-[999] w-screen h-screen",children:[(0,a.jsx)("h3",{className:"text-lato text-2xl font-light text-white",children:p.title}),(0,a.jsx)("p",{children:p.paragraph})]})}}},function(e){e.O(0,[774,465,888,179],(function(){return t=7352,e(e.s=t);var t}));var t=e.O();_N_E=t}]);