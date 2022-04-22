import React from 'react';
import { NavLink } from 'react-router-dom';

import { Fonts } from '../theme/fonts';
import { Containers } from './../theme/containers';
import { Styling } from '../theme/styling';
import { Images } from '../../assets/img';

export const Footer = () => {
    return (
        <>
            <div
                className={`relative flex items-center justify-center mt-10 xsm:mb-0 md:mb-6 lg:mb-0 z-20`}>
                <div
                    className={`${Styling.transitionStyleFast} ${Containers.mainContainer}`}>
                    <footer
                        className={`bg-primary dark:bg-darkerPrimary xsm:rounded-none md:rounded-lg lg:rounded-b-none lg:rounded-t-lg xsm:px-8 xsm:pt-10 md:px-14 md:pt-10 md:pb-2 lg:px-16 lg:pt-12 4xl:pb-5`}>
                        <div
                            className="w-full flex xsm:flex-col md:flex-row items-center xsm:justify-center md:justify-start footerTxt">
                            <div
                                className='flex xsm:flex-col md:flex-col w-full items-center xsm:justify-center md:justify-start md:border-r border-secondary border-opacity-30 dark:border-opacity-20'>
                                <div className="w-auto md:w-full">
                                    <img
                                        src={Images.logoTxt}
                                        alt="ResolYou Kenya"
                                        className='xsm:w-32 2xl:w-36 xsm:mb-2 xl:mb-3'
                                    />
                                </div>
                                <div className="w-full">
                                    <p
                                        className={`text-white xsm:text-center md:text-left tracking-smidgePlus xsm:leading-3 lg:leading-4 opacity-90 ${Fonts.footerFont}`}>
                                        Copyright &copy; 2022, ResolYou
                                        <br />
                                        All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full text-right">
                                <div
                                    className="w-full">
                                    <p
                                        className='text-white xsm:border-t border-secondary border-opacity-10 md:border-none uppercase xsm:text-center md:text-right opacity-90 xsm:text-3micro md:text-xs xl:text-2xs 2xl:text-sm tracking-smidge xsm:leading-4 md:leading-5 2xl:leading-6 xsm:mt-4 md:mt-0 xsm:pt-4 md:pt-0'>
                                        1<sup>st</sup> Floor. Test Address, ABCD PLACE
                                        <br />
                                        Waiyaki Way, Westlands
                                        <br />
                                        P.O. Box 123456–00200
                                        <br />
                                        Nairobi,
                                        <br />
                                        Kenya.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`footerLinks flex xsm:flex-col md:flex-row text-secondary xsm:tracking-wide md:tracking-wider w-full md:pt-5 xsm:mt-4 md:mt-10 border-t border-secondary border-opacity-10 ${Fonts.footerFont}`}
                        >
                            <a
                                href="https://linchpin.co.ke/"
                                target="_blank"
                                className="flex xsm:flex-col md:flex-row xsm:items-center xsm:w-full md:w-1/2 xsm:text-center md:text-left xsm:pt-3 xsm:pb-4 md:p-0 md:pb-0 border-secondary border-opacity-20 xsm:border-b md:border-none"
                            >
                                <img
                                    src={Images.linchpin}
                                    alt="Linchpin Ltd Kenya"
                                    className='xsm:block md:hidden xsm:my-2 xl:mt-0.5 xsm:w-5 xl:w-3.5'
                                />
                                <p
                                    className='transition-all duration-300 hover:text-white xsm:pb-2 xsm:text-3micro lg:text-xs 2xl:text-2xs'
                                >
                                    Designed By Linchpin
                                </p>
                                <span>
                                    <img
                                        src={Images.linchpin}
                                        alt="Linchpin Ltd Kenya"
                                        className='xsm:hidden md:block xsm:ml-1 xl:ml-2 xsm:mt-0 xl:-mt-1.5 xsm:w-3 xl:w-3.5'
                                    />
                                </span>
                            </a>
                            <ul
                                className="xsm:w-full md:w-1/2 flex flex-row xsm:justify-center xsm:py-4 md:py-0 md:justify-end xsm:space-x-2 xl:space-x-6 2xl:space-x-10"
                            >
                                <li>
                                    <NavLink
                                        to="/"
                                        className='transition-all duration-300 hover:text-white'
                                    >
                                        Terms &amp; Conditions
                                    </NavLink>
                                </li>
                                <li>|</li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className='transition-all duration-300 hover:text-white'
                                    >
                                        Privacy
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}