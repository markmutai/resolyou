import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarLoader } from 'react-spinners';

import { Fonts } from '../../components/theme/fonts';
import { Containers } from '../../components/theme/containers';
import { Styling } from '../../components/theme/styling';
import { ThemeContext } from '../../components/darkmode/themeContext';
import { Buttons } from '../../components/theme/buttons';

export const ErrorPage = () => {
    const navigate = useNavigate();
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
                    relative z-20`}>
                        <div className={`
                            ${Containers.glsFx},
                            ${Containers.mainCarouselContainer},
                            ${Containers.mainContainer}
                        `}>
                            {/* <div className={`flex items-center justify-center ${Containers.carouselSubContainer}`}> */}
                            <motion.div
                                className={`
                                ${Styling.flexCenter}
                                ${Containers.carouselSubContainer}`}
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
                        relative z-0`}>
                            <div className={`${[
                                Containers.glsFx,
                                Containers.mainCarouselContainer,
                                Containers.mainContainer
                            ]}
                            `}>
                                <div className={Containers.errorContainer}>
                                    <h1 className={`${Fonts.errorFont} opacity-90`}>
                                        OOPS!
                                        <br />
                                        <br />
                                        <strong className={`
                                        text-secondary dark:text-gray-50 
                                        xsm:text-md 
                                        md:text-2xl 
                                        xl:text-2xl
                                        `}>
                                            The page you're looking for
                                            <br />
                                            isn't done yet.
                                        </strong>
                                    </h1>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className={`
                                        ${Buttons.btnAction}
                                        ${Styling.transitionStyleFaster} 
                                        px-12 h-16 mt-8
                                        `}>
                                        Take Me Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            }
            {/* </motion.div> */}
        </>
    )
}