import React, { useEffect, useState } from "react";
// import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { BarLoader } from 'react-spinners';
import { ThemeContext } from '../../components/darkmode/themeContext';
// import InputField from "./InputField"
// import SelectField from "./SelectField";
// import TextareaField from "./TextareaField";
// import { ChevronRightIcon } from '@heroicons/react/solid'
// import InputField from './../../components/form/inputField';
// import TextAreaField from './../../components/form/textArea';
import MapContainer from '../../components/map/index.js';

// import { Fonts } from '../../components/theme/fonts';
import { Containers } from '../../components/theme/containers';
import { Styling } from '../../components/theme/styling';
// import { Images } from '../../assets/img';
// import { Buttons } from "../../components/theme/buttons";
import Form from "../../components/form/index.tsx";

const Contact = () => {
    /* const [values, setValues] = useState({
        fullName: '',
        email: '',
        role: '',
        message: ''
    }); */
    const [status, setStatus] = useState(false);


    /* const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_h2yd8as', 'template_fhmcxbo', values, '5xjsAiLXQwwov2AtB')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                    role: '',
                    message: ''
                });
                setStatus(true);
            }, error => {
                setStatus(false);
            });
    } */

    const { theme } = React.useContext(ThemeContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1300)
    }, [])

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 20000);
        }
    }, [status]);

    /* const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    } */

    return (
        <>
            {
                loading ?
                    <div className={`
                    ${Styling.flexCenter}
                    relative z-20
                    `}>
                        <div className={`$
                        ${Containers.glsFx}
                        ${Containers.carouselContainer}
                        ${Containers.mainContainer}`}>
                            {/* <div className={`flex items-center justify-center ${Containers.carouselSubContainer}`}> */}
                            <motion.div
                                className={`${Styling.flexCenter} ${Containers.carouselSubContainer}`}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut"
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                initial={{
                                    opacity: 0,
                                    y: 0
                                }}
                            >
                                {theme === 'dark' ? (
                                    <BarLoader
                                        color={'hsl(207, 100%, 65%)'}
                                        loading={loading}
                                        // css={override}
                                        size={50}
                                        speedMultiplier='0.9'
                                    />
                                ) : (
                                    <BarLoader
                                        color={'hsl(211, 100%, 18%)'}
                                        loading={loading}
                                        // css={override}
                                        size={50}
                                        speedMultiplier='0.9'
                                    />
                                )}
                            </motion.div>
                            {/* </div> */}
                        </div>
                    </div>
                    :
                    <motion.div
                        transition={{
                            duration: 0.75,
                            ease: "easeInOut"
                        }}
                        exit={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        initial={{
                            opacity: 0,
                            y: 0
                        }}
                    >
                        <div className={`
                        ${Styling.flexCenter}
                        relative z-0`
                        }>
                            <div className={`${[
                                Containers.glsFx,
                                Containers.mainCarouselContainer,
                                Containers.mainContainer
                            ]}
                        `}>
                                <div className={`${Containers.formContainer}`}>
                                    <div className={`
                                    ${Containers.formSubContainer} 
                                    xsm:px-8 xsm:pb-12 
                                    md:px-24 
                                    lg:px-32 lg:py-14 
                                    xl:px-16`
                                    }>
                                        {/* {status && renderAlert()} */}
                                        {/* <h2
                                            className={`${Fonts.sectionTitleFont}`}>
                                            Contact
                                        </h2> */}
                                        <div
                                            className="w-full mx-auto mt-1 py-2">
                                            <Form />
                                        </div>
                                    </div>
                                    <div className={`
                                    relative xsm:-mt-8 md:mt-0 
                                    xsm:w-full xsm:px-2 xsm:pb-6 xsm:border-t pt-7
                                    border-primary dark:border-secondary border-opacity-20 dark:border-opacity-30
                                    md:px-6 md:border-none
                                    lg:w-1/2 lg:p-10
                                    `}>
                                        <div className={`
                                        rounded-md overflow-hidden z-50 opacity-100 dark:opacity-80
                                        
                                        xsm:h-[20rem] 
                                        lg:h-[40rem] 
                                        border-3 border-gray-200 dark:border-darkSecondary 
                                        border-opacity-50 dark:border-opacity-30
                                        `}>
                                            <MapContainer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            }
        </>
    )
}

// const renderAlert = () => (
//     <div className={`${Styling.transitionStyleFaster} mnuFont uppercase w-full h-full flex items-center justify-center text-center text-white bg-lime-600 rounded-[3px] mb-5`}>
//         <p>Your message has been sent</p>
//     </div>

// )

export default Contact