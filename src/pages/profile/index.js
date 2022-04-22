import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarLoader } from 'react-spinners';

import { Fonts } from '../../components/theme/fonts';
import { Containers } from '../../components/theme/containers';
import { Styling } from '../../components/theme/styling';
import { Images } from '../../assets/img';
import { ThemeContext } from '../../components/darkmode/themeContext';

export const Profile = () => {
    const { theme } = React.useContext(ThemeContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1300)
    }, [])
    return (
        <>

            {
                loading ?
                    <div className={`
                    ${Styling.flexCenter}
                    relative z-20
                    `}>
                        <div className={`${[Containers.glsFx, Containers.carouselContainer, Containers.mainContainer]}`}>
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
                        <div
                            className={`
                            ${Styling.flexCenter}
                            relative z-0`}>
                            <div
                                className={`
                                    ${[Containers.glsFx, Containers.mainCarouselContainer, Containers.mainContainer]}
                                `}>
                                <div
                                    className={Containers.profileContainer}>
                                    {/* Profile Image */}
                                    <div
                                        className={`
                                        ${Styling.flexCenter}
                                        border-secondary border-opacity-20 dark:border-opacity-10 
                                        xsm:hidden xsm:w-full xsm:pt-0 xsm:pb-0 xsm:px-0
                                        md:px-24 md:pb-12
                                        lg:block lg:border-r lg:w-1/2 lg:p-0 lg:py-14 lg:px-32
                                        xl:px-10 
                                        `}>
                                        <img
                                            alt="Nyokabi Kamotho"
                                            src={Images.nkImg}
                                            className="w-80 h-auto mx-auto p-4"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className={`
                                    ${Styling.flexY}
                                    h-auto flex-col 
                                    xsm:w-full xsm:py-0 xsm:px-0
                                    md:px-10 md:py-4 
                                    lg:py-14 
                                    xl:pr-0 xl:pl-16 `}>
                                        <div
                                            className={`
                                            ${Styling.flexCenter}
                                            border-secondary border-opacity-20 dark:border-opacity-10 
                                            xsm:block xsm:w-full xsm:pt-0 xsm:px-14 xsm:pb-5
                                            md:pb-12 md:px-24 
                                            lg:hidden lg:border-r lg:w-1/2 lg:p-0 lg:py-12 lg:px-32
                                            xl:px-16
                                            `}>
                                            <img src={Images.nkImg} alt="Conflict Resolution" className="xsm:w-full md:w-80 h-auto mx-auto border-4 rounded-lg overflow-hidden border-secondary border-opacity-20 dark:border-primary" />
                                        </div>
                                        <h2 className={`${Fonts.sectionTitleFont}`}>
                                            Nyokabi Kamotho
                                        </h2>
                                        <p className={`${Fonts.bodyFont}`}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit velit, nunc malesuada volutpat id amet nisi, aliquet. Varius rutrum aliquam vitae quam vitae, quisque. Lectus id suspendisse nam ac facilisi sed fringilla. Eu arcu massa, ac pellentesque sapien aliquet. Semper velit, lacus, urna, turpis vel turpis morbi nisl, dapibus. Vitae pharetra et, quis proin.
                                            <br />
                                            <br />
                                            Etiam faucibus sodales nec nisl eget massa. Urna pellentesque porttitor id at quis pharetra arcu, sociis malesuada. Scelerisque orci adipiscing pellentesque varius ipsum platea odio. At pharetra nunc consequat, dui. Facilisis sagittis nulla suspendisse quam nisi sagittis massa. Habitasse suspendisse facilisis viverra nec pretium. Nam laoreet lorem posuere enim viverra. Eros curabitur nunc imperdiet imperdiet id nisi sit diam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            }
            {/* </motion.div> */}
        </>
    )
}