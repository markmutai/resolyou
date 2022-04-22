import React from 'react';
import { ThemeContext } from './themeContext';
import { Styling } from '../theme/styling';

// "text-gray-500 dark:text-gray-400 bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"

export const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const modeBtn =
        `
            bg-gradient-to-br 
            xsm:w-4 xl:w-5 
            xsm:h-4 xl:h-5 
        `
        ;

    const btnWindow =
        `
            w-full 
            xsm:px-1.5
            md:p-0.5
        `
        ;


    return (
        <>
            <div className='relative flex flex-row justify-center z-40 -mt-4 md:mb-8 lg:mb-10 2xl:mb-12 opacity-90'>
                <div
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={`${Styling.transitionStyleFast} darkModeToggle cursor-pointer transition-all duration-500 flex flex-row bg-lightSky bg-no-repeat bg-cover dark:bg-darkSky justify-center xsm:px-2 md:px-4 2xl:px-7 xsm:py-0.5 md:py-0 2xl:py-0.5 rounded-full dark:from-slate-900 dark:to-blue-800 shadow-sm xsm:border-2 xl:border-3 border-white hover:border-lightSecondary dark:border-darkSecondary dark:hover:border-white border-opacity-90 dark:border-opacity-80`}>
                    {theme === 'dark' ? (
                        // Dark Mode
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={theme === 'dark' ? `${Styling.transitionStyleFast} ${btnWindow} xsm:translate-x-3 md:translate-x-4 2xl:translate-x-6 text-lg rounded-full ring-transparent cursor-pointer` : ''}
                        >
                            <div className={`${modeBtn} from-gray-50 to-gray-400 rounded-full shadow-md`}></div>
                            {/* <p className='text-gray-500'>Light Mode</p> */}
                        </button>

                    ) : (
                        // Light Mode
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={theme === 'dark' ? '' : `${Styling.transitionStyleFast} ${btnWindow} xsm:-translate-x-3 md:-translate-x-4 2xl:-translate-x-6 text-lg rounded-full cursor-pointer`}
                        >
                            <div className={`${modeBtn} from-yellow-200 to-amber-500 rounded-full shadow-md`}></div>
                        </button>
                    )}

                </div>
                <div className="absolute z-40 xsm:hidden md:block w-full bg-gray-300">
                    {theme === 'dark' ? (
                        <p
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={(`${Styling.transitionStyle} ${Styling.modeLabelStyle} text-primary dark:text-secondary`)}>
                            Dark Mode
                        </p>
                    ) : (
                        <p
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={(`${Styling.transitionStyle} ${Styling.modeLabelStyle} text-primary dark:text-secondary`)}>
                            Light Mode
                        </p>
                    )}

                </div>

            </div>

        </>
    );
};
