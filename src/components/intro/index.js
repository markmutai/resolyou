import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { BarLoader } from 'react-spinners';

import { Fonts } from '../theme/fonts';
import { Containers } from './../theme/containers';
import { Styling } from '../theme/styling';
import { Images } from '../../assets/img';
import { ThemeContext } from '../darkmode/themeContext';
// import { Spacing } from '../theme/spacing';


export const Intro = () => {
    const { theme } = React.useContext(ThemeContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }, [])
    return (
        <>
            <div>
                {
                    loading ?
                        <div className={`${Containers.introContainer} justify-center`}>
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
                        </div>
                        :
                        <div key={1} className="relative z-20">
                            <div className={`${Containers.carouselSubContainer} ${Styling.flexX}`}>
                                <motion.div
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
                                        <img src={Images.logoDrk} alt="ResolYou Conflict Resolution" className={` xsm:w-48 md:w-60 mx-auto mb-6 opacity-80`} />
                                    ) : (
                                        <img src={Images.logo} alt="ResolYou Conflict Resolution" className={` xsm:w-48 md:w-60 mx-auto mb-6`} />
                                    )}
                                    <h1 className={`${Fonts.titleFont} opacity-90`}>Conflict Resolution
                                        <br />
                                        Resolyou<strong className="text-secondary dark:text-gray-50">.org</strong>
                                    </h1>
                                </motion.div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}