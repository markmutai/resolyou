const containerColors = 'bg-white bg-opacity-80 dark:bg-darkPrimary';

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
    xsm:h-[31.5rem] 
    md:h-[41rem] 
    lg:h-105 
    2xl:h-115
`;

export const Containers = {
    glsFx:
        `
        gls flex h-auto rounded-lg  
        shadow-2xl dark:shadow-none 
        bg-gray-100 dark:bg-primary bg-opacity-30 dark:bg-opacity-10
        `
    ,

    mainContainer:
        `   
        ${containerDimensions}    
        xsm:w-full xsm:p-0 xsm:py-0 
        xl:px-0 
        2xl:p-0 
        `
    ,

    mainCarouselContainer:
        `   
        ${containerDimensions}
        relative flex items-center justify-center z-20 mb-12
        xsm:mt-0 
        md:mt-6 
        xl:mt-0 ${containerDimensions}
        `
    ,

    introContainer:
        `   
        ${containerColors} ${carouselDimensions} 
        flex flex-col items-center rounded-lg my-auto 
        `
    ,

    carouselSubContainer:
        `
        ${containerColors} ${carouselDimensions} 
        flex items-center rounded-lg my-auto
        xsm:flex-col 
        xl:flex-row
        `
    ,

    profileContainer:
        `
        ${containerColors} 
        flex flex-row items-center rounded-lg my-auto w-full 
        xsm:px-8 xsm:h-auto xsm:py-12 
        md:px-20 
        lg:h-auto 
        `
    ,

    imageContainer:
        `   
        flex justify-center items-center 
        border-secondary border-opacity-20 dark:border-opacity-10 
        xsm:hidden 
        md:block md:w-full md:py-8 
        lg:border-r lg:w-1/2 
        xl:p-6  
    `
    ,

    errorContainer:
        `
        ${containerColors} 
        flex flex-col items-center justify-center rounded-lg w-full h-115 my-auto 
             
        `
    ,

    formContainer:
        ` 
        ${containerColors} 
        flex items-center rounded-lg h-auto w-full my-auto
        xsm:flex-col xsm:py-0
        md:py-4
        lg:flex-row lg:px-0
        `
    ,

    formSubContainer:
        `
        flex flex-col justify-center items-center 
        lg:border-r border-secondary border-opacity-20 dark:border-opacity-10 
        xsm:w-full xsm:pt-1 
        md:pt-4 
        lg:w-1/2 lg:p-4
        `
    ,

    buttonContainer:
        `
        relative z-40 cursor-pointer 
        w-32 h-32 
        mx-4 mb-1 
        py-3  
        `
    ,
}