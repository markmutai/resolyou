import React from 'react';
import { motion } from "framer-motion"

import CookieConsent from "react-cookie-consent";
import SimpleSlider from '../../components/slider';
import { ThemeContext } from '../../components/darkmode/themeContext';

// import { Fonts } from '../../components/theme/fonts';

export const Home = () => {
    const { theme } = React.useContext(ThemeContext);
    return (
        <>
            <motion.div
                transition={{
                    duration: 1.5,
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
                    y: 0.15
                }}
            >
                <div
                    className="relative flex items-center justify-center z-[9999]">
                    {theme === 'dark' ? (
                        <CookieConsent
                            disableButtonStyles="true"
                            location="bottom"
                            containerClasses="flex items-center xsm:py-3 md:py-2 xsm:px-0 md:px-4 xsm:text-3xs md:text-base"
                            contentClasses="w-full bodyText place-self-start"
                            buttonText="I Agree"
                            buttonClasses="md:absolute right-5 transition-all duration-500 mnuFont xsm:mt-0 md:mt-1 rounded-[2px] xsm:w-screen xsm:h-12 md:w-28 md:h-12 bg-darkSecondary hover:bg-primary border-b-6 border-black border-opacity-15 dark:border-opacity-30"
                            cookieName="myAwesomeCookieName2"
                            className="bodyText"
                            padding={0}
                            style={{ background: "hsl(215, 100%, 5%)" }}
                            expires={150}
                            hideOnAccept="false"
                        >
                            <p className="">
                                This website uses cookies to enhance the user experience. Confirm your consent to the use of cookies
                            </p>
                        </CookieConsent>
                    ) : (
                        <CookieConsent
                            disableButtonStyles="true"
                            location="bottom"
                            containerClasses="flex items-center xsm:py-3 md:py-2 xsm:px-0 md:px-4 xsm:text-3xs md:text-base"
                            contentClasses="bodyText w-full place-self-start"
                            buttonText="I Agree"
                            buttonClasses="md:absolute right-5 transition-all duration-500 mnuFont xsm:mt-0 md:mt-1 rounded-[2px] xsm:w-screen xsm:h-12 md:w-28 md:h-12 bg-secondary hover:bg-darkerPrimary border-b-6 border-black border-opacity-15 dark:border-opacity-30"
                            cookieName="myAwesomeCookieName2"
                            className="bodyText"
                            padding={0}
                            style={{ background: "hsl(211, 100%, 18%)" }}
                            expires={150}
                            hideOnAccept="false"
                        >
                            <p className="">
                                This website uses cookies to enhance the user experience. Confirm your consent to the use of cookies
                            </p>
                        </CookieConsent>
                    )
                    }
                    <SimpleSlider />
                </div>
            </motion.div>
        </>
    )
}