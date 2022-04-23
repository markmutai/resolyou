import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react'
import { createPopper } from "@popperjs/core";
// import { HashLink } from 'react-router-hash-link';

import { ThemeContext } from '../darkmode/themeContext';
import { Fonts } from '../theme/fonts';
import { Containers } from './../theme/containers';
import { Spacing } from '../theme/spacing';
import { Colors } from "../theme/colors";
import { Images } from '../../assets/img';
import { Toggle } from '../darkmode/toggle';
import { Styling } from '../theme/styling';


export const Navbar = () => {
    const ptnStyle = 'transition-all duration-[100ms] ease-in-out fixed w-full h-full z-0';

    const logoSizes = [20, 17.5, 37.5, 14];

    const logoWidth = `xsm:w-[${logoSizes[0]}%] lg:w-[${logoSizes[1]}%] xl:w-[${logoSizes[2]}%] 2xl:w-[${logoSizes[3]}%]`;

    const menuMath = [(100 - logoSizes[0]) / 2, (100 - logoSizes[1]) / 2, (100 - logoSizes[2]) / 2, (100 - logoSizes[3]) / 2];

    console.log(menuMath);

    const menuHalves = `h-full inline-flex items-center justify-center border-y xsm:w-[${menuMath[0]}%] lg:w-[${menuMath[1]}%] xl:w-[${menuMath[2]}%] 2xl:w-[${menuMath[3]}%]`

    const mobileSubStyle = `border-b border-secondary border-opacity-20 py-4`

    const { theme, setTheme } = React.useContext(ThemeContext);

    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "center"
        });
        setDropdownPopoverShow(true);
    };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {theme === 'dark' ? (
                <div className={`${ptnStyle} ptn_drk`}></div>
            ) : (
                <div className={`${ptnStyle} ptn`}></div>
            )}
            <div className={`
            relative inline-flex justify-center w-full z-10
            xsm:pt-8 
            md:py-12 
            lg:py-10 
            2xl:py-16
            `}>
                <nav className={`
                ${Styling.flexY}
                ${Containers.mainContainer}
                xsm:hidden xsm:h-12
                md:block md:h-15 
                lg:h-16 
                2xl:h-18
                `}>
                    <ul className={`
                    ${Styling.transitionStyleFast} 
                    ${Colors.menuItemColor}
                    cursor-default inline-flex items-center justify-center list-none w-full h-full text-white  xsm:text-sm 
                    lg:text-base 
                    2xl:text-md`}>

                        {/* 1st Half of Nav */}
                        <div className={`${menuHalves} ${Colors.borderNavColor} ${Spacing.menuItemsSpace}`}>
                            <li className={`
                            ${Fonts.menuFont} 
                            ${Spacing.menuSpace}
                            `}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? `text-secondary` : `${Styling.transitionStyleFaster} hover:text-secondary`)}>
                                    Home
                                </NavLink>
                            </li>
                            <li className={`${Spacing.menuItemBorder}`}></li>
                            <li className={`
                            ${Fonts.menuFont} 
                            ${Spacing.menuSpace}
                            `}>
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) => (isActive ? "text-secondary" : `${Styling.transitionStyleFaster} hover:text-secondary`)}>
                                    Profiles
                                </NavLink>
                            </li>
                        </div>

                        {/* ResolYou Logo */}
                        <div className={`
                        ${Containers.transitionStyleFast} 
                        ${logoWidth} 
                        ${Styling.flexCenter}
                        `}>
                            <NavLink
                                to="/">
                                <img
                                    alt="ResolYou"
                                    src={Images.logoMin}
                                    className={`
                                    opacity-100 dark:opacity-80
                                    xsm:w-[4rem] 
                                    lg:w-[4rem] 
                                    xl:w-[4.25rem] 
                                    2xl:w-[5rem]
                                    `} />
                            </NavLink>

                        </div>

                        {/* 2nd Half of Nav */}
                        <div className={`${menuHalves} ${Colors.borderNavColor} ${Spacing.menuItemsSpace}`}>
                            <li className={`
                            ${Fonts.menuFont} 
                            ${Spacing.menuSpace}
                            `}>
                                <NavLink
                                    to="/clients"
                                    className={({ isActive }) => (isActive ? "text-secondary" : `${Styling.transitionStyleFaster} hover:text-secondary`)}>
                                    Clients
                                </NavLink>
                            </li>
                            <li className={`${Spacing.menuItemBorder}`}></li>
                            <li className={`${Fonts.menuFont} ${Spacing.menuSpace}`}>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? "text-secondary" : `${Styling.transitionStyleFaster} hover:text-secondary`)}>
                                    Contact
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>

                {/* mobile_menu */}
                <nav className={`
                ${Containers.mainContainer} 
                ${Styling.flexY}
                mobileMenu relative z-40 p-0 mb-10
                xsm:block 
                md:hidden xsm:h-12 md:h-16 2xl:h-18 `}>
                    <div className={`${Styling.transitionStyleFast} ${Colors.menuItemColor} flex flex-row h-full xsm:w-full cursor-default `}>
                        <div className="flex items-center w-[40%] relative z-[999] border-y border-primary dark:border-secondary border-opacity-10 dark:border-opacity-15">
                            <button
                                className={`
                                    flex flex-row items-center w-auto
                                    text-white font-bold uppercase text-sm 
                                    outline-none focus:outline-none ease-linear  
                                    transition-all duration-150
                                    `
                                }
                                type="button"
                                ref={btnDropdownRef}
                                onClick={() => {
                                    dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                }}
                            >
                                {/* <h1
                                onClick={() => setOpen()}
                            >Menu</h1> */}
                                {theme === 'dark' ? (
                                    <Hamburger
                                        toggle={setOpen}
                                        rounded={true}
                                        size={24}
                                        easing="ease-in"
                                        distance="lg"
                                        duration={0.3}
                                        toggled={isOpen}
                                        color="hsl(207, 100%, 65%)"

                                    />
                                ) : (
                                    <Hamburger
                                        toggle={setOpen}
                                        rounded={true}
                                        size={24}
                                        easing="ease-in"
                                        distance="lg"
                                        duration={0.3}
                                        toggled={isOpen}
                                        color="hsl(211, 100%, 18%)"

                                    />
                                )}

                            </button>
                            <p
                                onClick={() => {
                                    closeDropdownPopover();
                                    setOpen();
                                }}
                                className={`
                                mnuFont flex items-center pl-1 cursor-default 
                                text-primary dark:text-secondary uppercase text-sm 
                                h-full w-full text-left `}>
                                Menu
                            </p>
                            <div className="mnuFont text-white absolute top-12 left-0 z-50">
                                <ul
                                    ref={popoverDropdownRef}
                                    className={
                                        (dropdownPopoverShow ? "block " : "hidden ") +
                                        `${Styling.transitionStyleFast} bg-primary dark:bg-black z-50 list-none text-left text-2sm+ rounded-br-lg shadow-2xl space-y-2 pt-1 pb-2 pl-4 w-40`
                                    }
                                >
                                    <li className={`${mobileSubStyle}`}>
                                        <NavLink
                                            to="/"
                                            onClick={() => {
                                                closeDropdownPopover();
                                                setOpen();

                                            }}
                                            className={({ isActive }) => (isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={`${mobileSubStyle}`}>
                                        <NavLink
                                            to="/profile"
                                            onClick={() => {
                                                closeDropdownPopover();
                                                setOpen();

                                            }}
                                            className={({ isActive }) => (isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`}>
                                            Profiles
                                        </NavLink>
                                    </li>
                                    <li className={`${mobileSubStyle}`}>
                                        <NavLink
                                            to="/clients"
                                            onClick={() => {
                                                closeDropdownPopover();
                                                setOpen();

                                            }}
                                            className={({ isActive }) => (isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`}>
                                            Clients
                                        </NavLink>
                                    </li>
                                    <li className={`py-4`}>
                                        <NavLink
                                            to="/contact"
                                            onClick={() => {
                                                closeDropdownPopover();
                                                setOpen();

                                            }}
                                            className={({ isActive }) => (isActive ? "text-secondary" : `hover:text-secondary`) + `${Styling.transitionStyle}`}>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`flex items-center justify-center xsm:w-[20%] px-4 h-full`}>
                            <NavLink
                                to="/"
                                onClick={() => {
                                    closeDropdownPopover();
                                    setOpen();
                                }}
                            >
                                <img src={Images.logoMin} alt="ResolYou" className='' />
                            </NavLink>

                        </div>
                        <div className={`
                        flex flex-row items-center justify-end h-full pr-3
                        border-y border-primary dark:border-secondary border-opacity-10 dark:border-opacity-15  xsm:w-[40%]
                        `}>
                            {theme === 'dark' ? (
                                <p
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className='mnuFont flex items-center justify-end uppercase text-primary dark:text-secondary text-sm h-full w-full text-right pr-3'>
                                    Dark
                                </p>
                            ) : (
                                <p
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className='mnuFont flex items-center justify-end uppercase text-primary dark:text-secondary text-sm h-full w-full text-right pr-3'>
                                    Light
                                </p>
                            )}
                            {/* <p
                                onClick={() => {
                                    closeDropdownPopover();
                                    setOpen();
                                }}
                                className='mnuFont flex items-center justify-end uppercase text-primary dark:text-secondary text-xs h-full w-full text-right pr-2'>
                                Light/Dark
                            </p> */}
                            <div className="flex flex-row items-center pt-3.5 h-full">
                                <Toggle />
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
            <div className="flex flex-col justify-center xsm:hidden md:block">
                <Toggle />
            </div>
        </>
    )
}