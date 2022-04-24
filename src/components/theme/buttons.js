const btnTxt = `
text-white dark:text-gray-50 hover:text-white xsm:text-base lg:text-base 2xl:text-md
`

const btnHeight = `h-16`;

export const Buttons = {
    btnPrimary:
        `
        titles transition-all duration-500 text-white hover:text-tBlue50 mx-auto px-12 bg-tBlue50 hover:bg-white border-3 border-tBlue50 hover:border-tBlue50 hover:border-opacity-100 xsm:text-md xsm:w-full xsm:py-3 md:w-8/12 xl:text-lg hover:shadow-xl 2xl:py-4 2xl:w-7/12 
        `
    ,

    btnCarousel:
        `
        cursor-pointer bg-primary hover:bg-secondary absolute flex justify-center items-center z-40 my-auto xsm:rounded-sm md:rounded-[4px] lg:w-14 2xl:w-16 xsm:w-10 md:w-12 xsm:-translate-y-4 md:-translate-y-5 2xl:-translate-y-6 xsm:py-4 md:py-5 2xl:py-6
        `
    ,

    btnIcon:
        `
         m-auto xsm:w-3 md:w-4 2xl:w-5
        `
    ,

    btnGallery:
        `
        transition duration-300 absolute top-0 bottom-0 flex items-center justify-center bg-tBlue50 border-3 border-tBlue50 hover:bg-white hover:shadow-xl xsm:w-12 md:w-15 2xl:w-18 xsm:h-16 md:h-20 2xl:h-24 my-auto opacity-80 p-0 text-center
        `
    ,

    btnForm:
        `
        mnuFont bg-primary dark:bg-darkSecondary
        `
    ,

    btnAction:
        `
        mnuFont uppercase rounded-[3px] bg-secondary dark:bg-darkSecondary hover:bg-primary dark:hover:bg-primary border-b-6 border-black border-opacity-15 dark:border-opacity-40 ${btnHeight} ${btnTxt} 
        `
    ,

    btnMsgState:
        `
        mnuFont uppercase rounded-[3px] border-b-6 border-black border-opacity-15 dark:border-opacity-30 ${btnHeight} ${btnTxt}
        `
    ,

    btnActionFail:
        `
            mnuFont uppercase rounded-[3px] bg-red-500 dark:bg-darkSecondary hover:bg-primary dark:hover:bg-primary border-b-6 border-black border-opacity-15 dark:border-opacity-30 text-white dark:text-gray-50 hover:text-white xsm:text-base lg:text-base
        `
    ,

    /*  btnGallery:
         'mnuFont uppercase rounded-sm text-white hover:text-white dark:text-gray-50 xsm:text-lg lg:text-lg 2xl:text-md'
     ,
  */
}
